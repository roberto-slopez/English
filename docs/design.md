# English Learning Platform — Design System & Technical Spec

> Contrato técnico y de diseño que **todos** los componentes, lecciones y estilos deben respetar.

---

## 1. Stack & Principios
- **Framework**: Astro 6 + React 19 + TypeScript.
- **Styling**: Tailwind CSS v4 con variables en `@theme` en `global.css`.
- **Aesthetic Core**: Moderno, limpio, plano con elevación sutil. **PROHIBIDO EL USO DE GLOW/RESPLANDORES NEÓN**.
- **Mobile-First**: Optimizado prioritariamente para teléfonos y dispositivos móviles.

---

## 2. Sistema de Colorimetría (Indigo Base)

Basado en la teoría del color a partir de **Indigo** (`#4f46e5` / `rgb(79, 70, 229)`):

### 2.1 Paleta Principal (Indigo Monocromático)
- **Primary 50**: `#eef2ff` (Fondos ligeros seleccionados)
- **Primary 100**: `#e0e7ff` (Destacados sutiles)
- **Primary 200**: `#c7d2fe` (Bordes interactivos)
- **Primary 400**: `#818cf8` (Texto destacado en dark mode)
- **Primary 500**: `#6366f1` (Acciones / Foco)
- **Primary 600**: `#4f46e5` (Color primario principal en light mode)
- **Primary 700**: `#4338ca` (Hover / Estados presionados)
- **Primary 900**: `#1e1b4b` (Superficies profundas en dark mode)

### 2.2 Colores Complementarios y de Acento
- **Recompensas / Puntos / Rachas (Amber - Acento cálido complementario)**:
  - Light: `#d97706` (Amber 600) | Dark: `#fbbf24` (Amber 400)
- **Categorías Secundarias (Teal & Violeta - Análogos)**:
  - Teal: `#0d9488` (Teal 600) / `#2dd4bf` (Teal 300)
  - Violet: `#7c3aed` (Violet 600) / `#c084fc` (Violet 400)

### 2.3 Colores Semánticos (Feedback)
- **Éxito (Correcto - Emerald)**: `#059669` (Light) / `#34d399` (Dark)
- **Error / Atención (Rose)**: `#e11d48` (Light) / `#fb7185` (Dark)

### 2.4 Superficies y Neutrales (Zinc/Slate)
- **Light Theme**:
  - App Background: `#f8fafc`
  - Card Surface: `#ffffff`
  - Card Border: `#e2e8f0` (2px sólido para nitidez)
  - Text Primary: `#0f172a`
  - Text Muted: `#475569`
- **Dark Theme**:
  - App Background: `#0b0f19` (Zinc ultra profundo)
  - Card Surface: `#131b2e` (Contraste 4.5:1+)
  - Card Border: `#283553`
  - Text Primary: `#f8fafc`
  - Text Muted: `#94a3b8`

---

## 3. Reglas de Interacción & Mobile-First (0% Glow)

1. **Sin Glow**:
   - Queda totalmente prohibido `box-shadow` difuso de color fuerte (`shadow-[0_0_..._rgba(...)]`).
   - El estado `:hover` y `:active` se representa mediante bordes sólidos de 2px, elevación ligera (`shadow-sm`, `shadow-md` con bajo alfa), o cambio sutil de fondo.
2. **Dimensiones Táctiles (Mobile)**:
   - Todo botón u opción interactiva debe tener un tamaño mínimo de **48px x 48px** o relleno suficiente (`py-3.5 px-4`).
   - Las tarjetas de opciones usan `w-full` con bordes redondeados `rounded-2xl` para fácil pulsación con el pulgar.
3. **Barra de Acción Inferior**:
   - En pantallas móviles, los botones "Comprobar" / "Siguiente" permanecen fijados en la parte inferior para máxima ergonomía táctil.

---

## 4. Estructura del Panel de Bienvenida (Lesson Intro)

Cada lección o repaso incluye un panel/modal de bienvenida antes de iniciar los ejercicios:
1. **Encabezado**: Título de la lección e insignia de la categoría gramatical.
2. **Reglas Gramaticales**: Resumen de la teoría principal (ej. uso de *Because* para causas vs *So that* para propósito).
3. **Ejemplos Iluminados**: Tarjetas con oraciones de ejemplo.
4. **Instrucciones del Juego**: Explicación del sistema de respuesta, puntos por intento e indicación del botón `(?) Reglas` para consulta posterior.
5. **Botón Principal**: `¡Empezar repaso!` (Acción directa con foco automático).

---

## 5. Aleatorización de Ejercicios y Opciones

1. **Mezcla de Opciones (Options Shuffling)**:
   - Las opciones en `MultipleChoice`, `FillBlank`, `Matching` y `DragDrop` se barajan dinámicamente al cargar cada pregunta.
   - El motor de validación mapea correctamente las respuestas sin importar la posición visual.
2. **Mezcla de Ejercicios (Exercise Queue Shuffling)**:
   - Al reiniciar o comenzar una lección, el usuario tiene la opción de presentar las preguntas en orden aleatorio para evitar memorización de patrones.
