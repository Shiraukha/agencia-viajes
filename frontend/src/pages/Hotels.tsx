// Hotels — página de listado de hoteles
// Muestra todos los hoteles del archivo de datos mock (data/hoteles.ts)
// Al hacer clic en "Ver detalle" navega a /hotels/:id

import { useNavigate } from 'react-router-dom'
import { hotels } from '../data/hoteles'

export default function Hotels() {
  // useNavigate permite cambiar de ruta desde JavaScript (sin usar <Link>)
  const navigate = useNavigate()

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold text-gray-800">Hoteles</h1>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6 mt-8">
        {hotels.map((hotel) => (
          <div key={hotel.id} className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col gap-2 shadow-sm">
            <span className="text-xs text-gray-400 uppercase tracking-wide">Hotel</span>
            <h3 className="text-lg font-semibold text-gray-800">{hotel.name}</h3>
            <p className="text-gray-500 text-sm">{hotel.location}</p>
            <p className="text-gray-500 text-sm grow">{hotel.description}</p>
            <p className="text-indigo-600 font-semibold mt-2">{hotel.pricePerNight}€ / noche</p>
            <button
              className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors cursor-pointer"
              onClick={() => navigate(`/hotels/${hotel.id}`)}
            >
              Ver detalle
            </button>
          </div>
        ))}
      </div>
    </main>
  )
}
