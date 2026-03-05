import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

  return (
    <main className="flex flex-col items-center justify-center min-h-[80vh] text-center px-8">
      <h1 className="text-4xl font-bold text-gray-800">Bienvenido a la Agencia de Viajes</h1>
      <p className="mt-4 text-gray-500 text-lg">
        Reserva pistas deportivas, salas y mucho más.
      </p>
      <button
        className="mt-8 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors cursor-pointer"
        onClick={() => navigate('/resources')}
      >
        Ver recursos disponibles
      </button>
    </main>
  )
}
