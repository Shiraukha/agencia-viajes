// VehicleDetail — página de detalle de un vehículo concreto
// Recibe el :id por la URL y busca el vehículo en los datos mock
// Muestra info completa (marca, modelo, tipo, ubicación, precio/día) y botón de reserva

import { useParams, useNavigate } from 'react-router-dom'
import { vehicles } from '../data/vehicles'

export default function VehicleDetail() {
  // useParams extrae el :id de la URL (ej: /vehicles/1 → id = "1")
  const { id } = useParams()
  const navigate = useNavigate()
  // Busca el vehículo cuyo id numérico coincide con el de la URL
  const vehicle = vehicles.find((v) => v.id === Number(id))

  if (!vehicle) return <p className="p-8 text-gray-500">Vehículo no encontrado.</p>

  return (
    <main className="p-8 max-w-2xl mx-auto">
      <span className="text-xs text-gray-400 uppercase tracking-wide">{vehicle.type}</span>
      <h1 className="text-3xl font-bold text-gray-800 mt-1">{vehicle.brand} {vehicle.model}</h1>
      <p className="text-gray-500 mt-1">{vehicle.location}</p>
      <p className="text-gray-600 mt-4">{vehicle.description}</p>
      <p className="text-xl font-bold text-indigo-600 mt-4">{vehicle.pricePerDay}€ / día</p>
      <button
        className="mt-8 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors cursor-pointer"
        onClick={() => navigate(`/vehicles/${vehicle.id}/book`)}
      >
        Reservar
      </button>
    </main>
  )
}
