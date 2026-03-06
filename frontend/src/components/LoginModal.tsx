// LoginModal — modal de inicio de sesión / registro
// Se abre al pulsar "Iniciar sesión" en el Navbar
// Opciones: Google, Apple o email (visual de momento, sin backend)

import { useState, useEffect } from 'react'

type Props = {
  onClose: () => void
}

export default function LoginModal({ onClose }: Props) {
  // Vista activa: 'options' (botones sociales) o 'email' (formulario email + contraseña)
  const [view, setView] = useState<'options' | 'email'>('options')

  // Animación de entrada — el modal sube desde abajo al abrirse
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 10)
    return () => clearTimeout(t)
  }, [])
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // Cierra el modal al pulsar Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  return (
    // Overlay oscuro — clic fuera del modal lo cierra
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Contenedor del modal — stopPropagation evita que el clic dentro lo cierre */}
      <div
        className={`relative bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 p-8 flex flex-col gap-5 transition-all duration-400 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        onClick={(e) => e.stopPropagation()}
      >

        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors cursor-pointer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18M6 6l12 12"/>
          </svg>
        </button>

        {/* Título */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 leading-snug">
            Te damos la bienvenida a Travio.<br />
            <span className="text-indigo-600">Vamos a ponerte en marcha.</span>
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            Inicia sesión o regístrate para guardar búsquedas y ver ofertas privadas.
          </p>
        </div>

        {view === 'options' ? (
          <>
            {/* Botón Google */}
            <button className="flex items-center justify-center gap-3 w-full border border-gray-300 rounded-xl py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer">
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continuar con Google
            </button>

            {/* Botón Apple */}
            <button className="flex items-center justify-center gap-3 w-full border border-gray-300 rounded-xl py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.42c1.39.07 2.37.74 3.19.8 1.21-.24 2.39-.93 3.63-.84 1.54.12 2.71.72 3.47 1.84-3.17 1.88-2.42 6.03.69 7.19-.58 1.44-1.31 2.85-2.98 3.87zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              Continuar con Apple
            </button>

            {/* Separador */}
            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-gray-200"/>
              <span className="text-xs text-gray-400">o</span>
              <div className="flex-1 h-px bg-gray-200"/>
            </div>

            {/* Botón email */}
            <button
              onClick={() => setView('email')}
              className="flex items-center justify-center gap-3 w-full border border-gray-300 rounded-xl py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              Continuar con email
            </button>
          </>
        ) : (
          // Vista formulario email
          <>
            <button
              onClick={() => setView('options')}
              className="flex items-center gap-1 text-sm text-gray-500 hover:text-indigo-600 transition-colors cursor-pointer -mt-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6"/>
              </svg>
              Volver
            </button>

            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
              />
              <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
              />
              <button className="w-full bg-indigo-600 text-white rounded-xl py-3 text-sm font-semibold hover:bg-indigo-700 transition-colors cursor-pointer">
                Iniciar sesión
              </button>
            </div>
          </>
        )}

        {/* Pie legal */}
        <p className="text-xs text-gray-400 text-center -mt-1">
          Al continuar aceptas nuestros{' '}
          <span className="underline cursor-pointer hover:text-gray-600">Términos y condiciones</span>{' '}
          y nuestra{' '}
          <span className="underline cursor-pointer hover:text-gray-600">Política de privacidad</span>.
        </p>

      </div>
    </div>
  )
}
