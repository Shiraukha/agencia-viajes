import { useNavigate } from 'react-router-dom'
import { flights } from '../data/flights'

export default function Flights() {
  const navigate = useNavigate()

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold text-gray-800">Vuelos</h1>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6 mt-8">
        {flights.map((flight) => (
          <div key={flight.id} className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col gap-2 shadow-sm">
            <span className="text-xs text-gray-400 uppercase tracking-wide">Vuelo</span>
            <h3 className="text-lg font-semibold text-gray-800">{flight.airline}</h3>
            <p className="text-gray-500 text-sm">{flight.origin} → {flight.destination}</p>
            <p className="text-gray-500 text-sm">Fecha: {flight.departureDate}</p>
            <p className="text-gray-500 text-sm grow">Duración: {flight.duration}</p>
            <p className="text-indigo-600 font-semibold mt-2">{flight.price}€</p>
            <button
              className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors cursor-pointer"
              onClick={() => navigate(`/flights/${flight.id}`)}
            >
              Ver detalle
            </button>
          </div>
        ))}
      </div>
    </main>
  )
}
