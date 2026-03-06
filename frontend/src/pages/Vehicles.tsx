// Vehicles — página de listado de vehículos
// Muestra todos los vehículos del archivo de datos mock (data/vehicles.ts)
// Al hacer clic en "Ver detalle" navega a /vehicles/:id

import { useNavigate } from 'react-router-dom'
import { vehicles } from '../data/vehicles'

export default function Vehicles() {
  // useNavigate permite cambiar de ruta desde JavaScript (sin usar <Link>)
  const navigate = useNavigate()

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold text-gray-800">Vehículos disponibles</h1>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6 mt-8">
        {vehicles.map((vehicle) => (
          <div key={vehicle.id} className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col gap-2 shadow-sm">
            <span className="text-xs text-gray-400 uppercase tracking-wide">{vehicle.type}</span>
            <h3 className="text-lg font-semibold text-gray-800">{vehicle.brand} {vehicle.model}</h3>
            <p className="text-gray-500 text-sm">{vehicle.location}</p>
            <p className="text-gray-500 text-sm grow">{vehicle.description}</p>
            <p className="text-indigo-600 font-semibold mt-2">{vehicle.pricePerDay}€ / día</p>
            <button
              className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors cursor-pointer"
              onClick={() => navigate(`/vehicles/${vehicle.id}`)}
            >
              Ver detalle
            </button>
          </div>
        ))}
      </div>
    </main>
  )
}
