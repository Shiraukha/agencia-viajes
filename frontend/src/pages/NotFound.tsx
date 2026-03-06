// NotFound — página 404
// Se muestra cuando el usuario entra a una ruta que no existe
// Botón para volver a la home

import { useNavigate } from 'react-router-dom'

export default function NotFound() {
  const navigate = useNavigate()

  return (
    <main className="min-h-[80vh] flex flex-col items-center justify-center px-8 text-center gap-6">

      {/* Número grande decorativo */}
      <span className="text-8xl font-bold text-indigo-100 select-none">404</span>

      <div className="-mt-4">
        <h1 className="text-2xl font-bold text-gray-900">Página no encontrada</h1>
        <p className="text-gray-500 mt-2 text-sm max-w-sm">
          La URL que buscas no existe o ha sido movida. Vuelve al inicio y sigue explorando.
        </p>
      </div>

      <button
        onClick={() => navigate('/')}
        className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors cursor-pointer"
      >
        Volver al inicio
      </button>

    </main>
  )
}
