// Footer — pie de página global, visible en todas las páginas
// Estructura: columnas con logo+descripción, enlaces de navegación, legal y redes sociales

import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-12 pb-6 px-8">
      <div className="max-w-6xl mx-auto">

        {/* Grid principal: 4 columnas en desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

          {/* Columna 1 — Logo y descripción */}
          <div className="flex flex-col gap-3">
            <Link to="/" className="flex items-center gap-2 text-white font-bold text-xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-400">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              Travio
            </Link>
            <p className="text-sm leading-relaxed">
              Tu plataforma de viajes con los mejores precios en hoteles, vuelos y vehículos. Viaja sin preocupaciones.
            </p>
          </div>

          {/* Columna 2 — Navegación */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Explorar</h4>
            <Link to="/hotels" className="text-sm hover:text-white transition-colors">Hoteles</Link>
            <Link to="/flights" className="text-sm hover:text-white transition-colors">Vuelos</Link>
            <Link to="/vehicles" className="text-sm hover:text-white transition-colors">Vehículos</Link>
          </div>

          {/* Columna 3 — Empresa */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Empresa</h4>
            <span className="text-sm cursor-pointer hover:text-white transition-colors">Sobre nosotros</span>
            <span className="text-sm cursor-pointer hover:text-white transition-colors">Blog de viajes</span>
            <span className="text-sm cursor-pointer hover:text-white transition-colors">Contacto</span>
            <span className="text-sm cursor-pointer hover:text-white transition-colors">Trabaja con nosotros</span>
          </div>

          {/* Columna 4 — Síguenos */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Síguenos</h4>
            <div className="flex gap-4 mt-1">

              {/* Instagram */}
              <a href="#" className="hover:text-white transition-colors" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>

              {/* Twitter / X */}
              <a href="#" className="hover:text-white transition-colors" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a href="#" className="hover:text-white transition-colors" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a href="#" className="hover:text-white transition-colors" aria-label="YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
                  <path d="m10 15 5-3-5-3z"/>
                </svg>
              </a>

            </div>
          </div>

        </div>

        {/* Divisor */}
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <span>&copy; {new Date().getFullYear()} Travio. Todos los derechos reservados.</span>
          <div className="flex gap-5">
            <span className="cursor-pointer hover:text-white transition-colors">Términos y condiciones</span>
            <span className="cursor-pointer hover:text-white transition-colors">Política de privacidad</span>
            <span className="cursor-pointer hover:text-white transition-colors">Cookies</span>
          </div>
        </div>

      </div>
    </footer>
  )
}
