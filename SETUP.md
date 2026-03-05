# Setup inicial — React + Vite + TypeScript + React Router

Pasos para montar desde cero un proyecto frontend con este stack.

---

## 1. Crear el proyecto

```bash
npm create vite@latest frontend -- --template react-ts
cd frontend
npm install
```

## 2. Instalar React Router

```bash
npm install react-router-dom
```

## 3. Estructura de carpetas en `src/`

```bash
mkdir src/pages src/components src/data
```

Resultado:

```
src/
├── components/    <- componentes reutilizables (Navbar, etc.)
├── data/          <- datos mockeados (mientras no hay API)
├── pages/         <- una página por ruta
├── App.tsx
├── App.css
├── main.tsx
└── index.css
```

## 4. Limpiar el boilerplate de Vite

- `App.css` → vaciar
- `index.css` → dejar solo reset básico (margin/padding 0, box-sizing, body font)
- `App.tsx` → eliminar todo el contenido de ejemplo

## 5. Configurar React Router

### `main.tsx` — envolver la app con `BrowserRouter`

```tsx
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
```

### `App.tsx` — definir las rutas con `Routes` y `Route`

```tsx
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/resources/:id" element={<ResourceDetail />} />
        <Route path="/resources/:id/book" element={<BookingForm />} />
      </Routes>
    </>
  )
}
```

- `useParams()` en las páginas de detalle para leer el `:id` de la URL.
- `useNavigate()` para navegar programáticamente (ej. botón CTA en Home).

## 6. Crear páginas

Una por ruta, en `src/pages/`. Cada una es un componente funcional básico:

```tsx
export default function Home() {
  return <main>...</main>
}
```

## 7. Crear componentes

En `src/components/`. El primero es el `Navbar` con `<Link>` de react-router-dom (no `<a>`).

## 8. Arrancar el servidor

```bash
npm run dev
```

---

## Convenciones usadas

- Páginas en `PascalCase`: `Home.tsx`, `ResourceDetail.tsx`
- Rutas anidadas con parámetro: `/resources/:id` y `/resources/:id/book`
- Datos mockeados en `src/data/` hasta conectar con la API real
