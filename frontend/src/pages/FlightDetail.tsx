// FlightDetail — página de detalle de un vuelo concreto
// Recibe el :id por la URL y busca el vuelo en los datos mock
// Muestra info completa (aerolínea, origen, destino, fecha, duración, precio) y botón de reserva

import { useParams, useNavigate } from 'react-router-dom'
import { flights } from '../data/flights'

export default function FlightDetail() {
  // useParams extrae el :id de la URL (ej: /flights/2 → id = "2")
  const { id } = useParams()
  const navigate = useNavigate()
  // Busca el vuelo cuyo id numérico coincide con el de la URL
  const flight = flights.find((f) => f.id === Number(id))

  if (!flight) return <p className="p-8 text-gray-500">Vuelo no encontrado.</p>

  return (
    <main className="p-8 max-w-2xl mx-auto">
      <span className="text-xs text-gray-400 uppercase tracking-wide">Vuelo</span>
      <h1 className="text-3xl font-bold text-gray-800 mt-1">{flight.airline}</h1>
      <div className="mt-4 flex gap-4 text-gray-700 text-lg font-medium">
        <span>{flight.origin}</span>
        <span>→</span>
        <span>{flight.destination}</span>
      </div>
      <div className="mt-4 flex gap-6 text-sm text-gray-600">
        <span>Fecha: {flight.departureDate}</span>
        <span>Duración: {flight.duration}</span>
      </div>
      <p className="mt-4 text-xl font-bold text-indigo-600">{flight.price}€</p>
      <button
        className="mt-8 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors cursor-pointer"
        onClick={() => navigate(`/flights/${flight.id}/book`)}
      >
        Reservar
      </button>
    </main>
  )
}
