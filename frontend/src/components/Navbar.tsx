// Navbar — barra de navegación superior, siempre visible en todas las páginas
// Estructura: Logo (izquierda) | Botones (derecha: iniciar sesión + menú desplegable)

import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  // Controla si el menú desplegable está abierto o cerrado
  // Se abre al pasar el ratón por encima del botón y se cierra al salir
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-4 bg-white border-b border-gray-200">

      {/* Logo — al hacer clic vuelve a la home
          Usa <Link> de React Router para navegar sin recargar la página */}
      <Link to="/" className="flex items-center gap-2 text-indigo-600 font-bold text-xl">
        {/* Icono de globo terráqueo en SVG inline */}
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
        Travio
      </Link>

      <div className="flex items-center gap-4">

        {/* Botón de inicio de sesión — de momento no tiene funcionalidad,
            en el futuro abrirá un modal o redirigirá a /login */}
        <button className="text-gray-700 hover:text-indigo-600 font-medium cursor-pointer">
          Iniciar sesión
        </button>

        {/* Menú desplegable — se activa con hover (onMouseEnter/onMouseLeave)
            "relative" en el div padre para que el dropdown se posicione debajo del botón */}
        <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>

          {/* Botón con icono de flecha hacia abajo */}
          <button className="flex items-center justify-center w-9 h-9 rounded-full border border-gray-300 hover:border-indigo-400 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>

          {/* Dropdown — solo se renderiza si open es true
              z-10 asegura que aparece por encima del resto del contenido */}
          {/* pt-2 cubre el hueco entre el botón y el menú para que el hover no se interrumpa */}
          {open && (
            <div className="absolute top-full right-0 pt-2 w-40 z-10">
              <div className="bg-white border border-gray-200 rounded-lg shadow-lg py-2">
                <Link to="/hotels" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600">
                  Hoteles
                </Link>
                <Link to="/flights" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600">
                  Vuelos
                </Link>
                <Link to="/vehicles" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600">
                  Vehículos
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
