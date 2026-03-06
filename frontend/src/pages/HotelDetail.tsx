// HotelDetail — página de detalle de un hotel concreto
// Recibe el :id por la URL y busca el hotel en los datos mock
// Muestra info completa (nombre, ubicación, estrellas, precio) y botón de reserva

import { useParams, useNavigate } from 'react-router-dom'
import { hotels } from '../data/hoteles'

export default function HotelDetail() {
  // useParams extrae el :id de la URL (ej: /hotels/3 → id = "3")
  const { id } = useParams()
  const navigate = useNavigate()
  // Busca el hotel cuyo id numérico coincide con el de la URL
  // Number(id) convierte el string de la URL a número para poder compararlo
  const hotel = hotels.find((h) => h.id === Number(id))

  if (!hotel) return <p className="p-8 text-gray-500">Hotel no encontrado.</p>

  return (
    <main className="p-8 max-w-2xl mx-auto">
      <span className="text-xs text-gray-400 uppercase tracking-wide">Hotel</span>
      <h1 className="text-3xl font-bold text-gray-800 mt-1">{hotel.name}</h1>
      <p className="text-gray-500 mt-1">{hotel.location}</p>
      <p className="text-gray-600 mt-4">{hotel.description}</p>
      <div className="mt-4 flex gap-6 text-sm text-gray-700">
        <span>{'★'.repeat(hotel.stars)}{'☆'.repeat(5 - hotel.stars)}</span>
        <span className="font-semibold">{hotel.pricePerNight}€ / noche</span>
      </div>
      <button
        className="mt-8 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors cursor-pointer"
        onClick={() => navigate(`/hotels/${hotel.id}/book`)}
      >
        Reservar
      </button>
    </main>
  )
}
