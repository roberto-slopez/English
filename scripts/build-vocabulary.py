"""Rebuild the checked-in catalogue from pinned open lexical sources.
Download instructions and licensing: docs/vocabulary-srs.md. Python stdlib only.
"""
import csv, json, re, tarfile, zipfile, hashlib, unicodedata, bz2
import xml.etree.ElementTree as ET
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CACHE = ROOT / 'scripts/.vocabulary-cache'
OUT = ROOT / 'src/content/vocabulary'
ns = {'t': 'http://www.tei-c.org/ns/1.0'}
def norm(s):
    return ''.join(c for c in unicodedata.normalize('NFD', s.lower()) if not unicodedata.combining(c))
def text(e):
    return ' '.join(''.join(e.itertext()).split()) if e is not None else ''
def clean(s):
    s = re.sub(r'\[[^\]]*\]', '', s)
    s = re.sub(r'\((?:transitive|intransitive|countable|uncountable|usually|often)[^)]*\)', '', s)
    return ' '.join(s.split())

rows = list(csv.DictReader((OUT/'sources/NGSL-GR_rank.csv').read_text(encoding='utf-8-sig').splitlines()))
ranked = rows[50:]
assert len(ranked) == 5000 and len({r['Word'].lower() for r in ranked}) == 5000
wanted = {r['Word'].lower() for r in ranked}
with tarfile.open(CACHE/'eng-spa.tar.xz') as archive:
    root = ET.fromstring(archive.extractfile('eng-spa/eng-spa.tei').read())
lexicon = {}
for entry in root.findall('.//t:entry', ns):
    word = text(entry.find('t:form/t:orth', ns)).lower()
    if word not in wanted: continue
    pos = text(entry.find('t:gramGrp/t:pos', ns))
    for sense in entry.findall('t:sense', ns):
        translations = [text(q) for q in sense.findall('t:cit[@type="trans"]/t:quote', ns)]
        definitions = [clean(text(d)) for d in sense.findall('.//t:def', ns)]
        definition = next((d for d in definitions if not re.search(r'\b(obsolete|archaic|offensive|rare|slang|vulgar|derogatory|historical)\b', d, re.I)), '')
        if definition and translations:
            lexicon.setdefault(word, []).append({'pos': pos, 'definition': definition, 'meaning': '; '.join(translations[:3]),'source':'wikdict-2025.11.23'})

# Existing project-authored short glosses are usable enrichment; the word selection
# and order come exclusively from the official replacement list.
legacy = json.loads((CACHE/'legacy.json').read_text(encoding='utf-8'))
legacy_map = {r['word'].lower(): r for r in reversed(legacy)}
overrides = json.loads((OUT/'editorial.json').read_text(encoding='utf-8'))
for line in (OUT/'editorial.tsv').read_text(encoding='utf-8').splitlines():
    word, pos, meaning, definition = line.split('\t')
    overrides[word] = {**overrides.get(word,{}),'pos':pos,'meaning':meaning,'definition':definition,'source':'project-editorial'}
for line in (OUT/'examples.tsv').read_text(encoding='utf-8').splitlines():
    word, en, es = line.split('\t')
    overrides.setdefault(word,{})['example']={'en':en,'es':es,'attribution':'Original example · English Learning, 2026 · CC BY-SA 4.0'}
sentences = {}
wanted = {r['Word'].lower() for r in ranked}
with zipfile.ZipFile(CACHE/'sentences.zip') as archive:
    for line in archive.read('spa.txt').decode('utf-8').splitlines():
        parts = line.split('\t')
        if len(parts) < 3: continue
        en, es, attribution = parts[:3]
        if not (2 <= len(en.split()) <= 45) or len(en)>350: continue
        for word in set(re.findall(r"[a-z]+(?:'[a-z]+)?", en.lower())) & wanted:
            pool = sentences.setdefault(word, [])
            if len(pool)<160: pool.append({'en':en,'es':es,'attribution':attribution})

# Fill gaps using directly linked sentences in the official Tatoeba export.
# Retain both sentence owners and IDs rather than redistributing anonymous text.
unmatched = wanted - set(sentences)
links = {}
for line in bz2.open(CACHE/'eng-spa_links.tsv.bz2','rt',encoding='utf-8'):
    a,b = line.strip().split('\t'); links.setdefault(a,b)
spanish = {}
needed_es = set(links.values())
for line in bz2.open(CACHE/'spa_sentences_detailed.tsv.bz2','rt',encoding='utf-8'):
    p=line.rstrip('\n').split('\t')
    if p[0] in needed_es and p[3] != '\\N': spanish[p[0]]=(p[2],p[3])
forms = {}
for word in unmatched:
    for form in [word,word+'s',word+'es',word+'ed',word+'ing',word[:-1]+'ing' if word.endswith('e') else word+'ing',word[:-1]+'ies' if word.endswith('y') else word+'s']:
        forms.setdefault(form,set()).add(word)
for line in bz2.open(CACHE/'eng_sentences_detailed.tsv.bz2','rt',encoding='utf-8'):
    p=line.rstrip('\n').split('\t'); translation=spanish.get(links.get(p[0]))
    if not translation or p[3]=='\\N' or not 2<=len(p[2].split())<=40 or len(p[2])>300: continue
    for token in set(re.findall(r"[a-z]+(?:'[a-z]+)?",p[2].lower())):
        for word in forms.get(token,[]):
            pool=sentences.setdefault(word,[])
            if len(pool)<40: pool.append({'en':p[2],'es':translation[0],'attribution':f'CC BY 2.0 FR · Tatoeba #{p[0]} ({p[3]}) & #{links[p[0]]} ({translation[1]})'})

catalogue, missing, missing_examples = [], [], []
for rank, row in enumerate(ranked, 1):
    word = row['Word']; key = word.lower()
    senses = lexicon.get(key, [])
    if key in legacy_map:
        old = legacy_map[key]
        primary = {'pos':old['pos'],'definition':old['def'],'meaning':old['es'],'source':'project-editorial'}
    elif senses: primary = senses[0]
    else:
        missing.append(word); primary = {'pos':'','definition':'','meaning':'','source':'editorial'}
    primary = {**primary, **overrides.get(key, {})}
    alternatives = []
    for s in senses:
        if s['meaning'].split(';')[0] not in primary['meaning'] and s not in alternatives: alternatives.append(s)
    options = sentences.get(key, [])
    terms = [norm(t.strip()) for t in re.split(r'[/;,()]', primary['meaning']) if len(t.strip())>2]
    def score(s):
        tokens = ' '+norm(s['es'])+' '
        return 100*sum(bool(re.search(r'\b'+re.escape(t)+r'\b',tokens)) for t in terms)-abs(len(s['en'].split())-9)
    example = max(options, key=score) if options else None
    if 'example' in primary: example = primary.pop('example')
    if not example: missing_examples.append(word)
    catalogue.append({'id':'ngslgr-'+key,'word':word,'rank':rank,'sourceId':int(row['WordID']),**primary,'alternatives':alternatives[:2],'example':example})

missing = [w for w in missing if not overrides.get(w.lower(),{}).get('meaning')]
(CACHE/'missing.json').write_text(json.dumps({'glosses':missing,'examples':missing_examples},ensure_ascii=False,indent=2),encoding='utf-8')
(OUT/'ngsl-gr.json').write_text(json.dumps(catalogue,ensure_ascii=False,separators=(',',':'))+'\n',encoding='utf-8')
sources = {'version':'ngsl-gr-1.0-2026-10-17','words':5000,'selection':'Official WordID 51–5050; 50 supplementary calendar/number entries excluded. WordID is source order, not an independently measured frequency.','source':'https://www.newgeneralservicelist.com/s/NGSL-GR_rank.csv','sha256':hashlib.sha256((OUT/'sources/NGSL-GR_rank.csv').read_bytes()).hexdigest(),'dictionarySha256':hashlib.sha256((CACHE/'eng-spa.tar.xz').read_bytes()).hexdigest(),'sentencesSha256':hashlib.sha256((CACHE/'sentences.zip').read_bytes()).hexdigest()}
sources['snapshots'] = {name: hashlib.sha256((CACHE/name).read_bytes()).hexdigest() for name in ['eng_sentences_detailed.tsv.bz2','spa_sentences_detailed.tsv.bz2','eng-spa_links.tsv.bz2']}
(OUT/'manifest.json').write_text(json.dumps(sources,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
print(json.dumps({'words':len(catalogue),'missingGlosses':len(missing),'missingExamples':len(missing_examples),'missing':missing},ensure_ascii=False))
