// Vite `?raw` import: the file content is inlined as a string at build
// time. Used by db.ts to bundle schema.sql into the server output
// instead of reading it from the runtime filesystem (which won't have
// it — Astro doesn't copy .sql files into dist/).
declare module '*.sql?raw' {
  const content: string;
  export default content;
}
