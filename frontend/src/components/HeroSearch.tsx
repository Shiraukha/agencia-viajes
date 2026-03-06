// HeroSearch — sección principal de la home
// Contiene los tabs de búsqueda (Hoteles / Vuelos / Vehículos),
// un buscador dinámico según el tab activo, y una imagen decorativa.

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import hotelImg from '../assets/hotel.jpg'
import flightImg from '../assets/flight.jpg'
import vehiculoImg from '../assets/vehiculo.jpg'

export default function HeroSearch() {

  // Tab activo — controla qué título, subtítulo, buscador e imagen se muestran
  const [activeTab, setActiveTab] = useState<'hotels' | 'flights' | 'vehicles'>('hotels')

  // Animación de entrada — el searchbar aparece desde abajo al cargar la página
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 50)
    return () => clearTimeout(t)
  }, [])

  // Animación al cambiar de tab — fade-out → cambia contenido → fade-in
  const [contentVisible, setContentVisible] = useState(true)
  const switchTab = (tab: 'hotels' | 'flights' | 'vehicles') => {
    if (tab === activeTab) return
    setContentVisible(false)
    setTimeout(() => {
      setActiveTab(tab)
      setContentVisible(true)
    }, 150)
  }

  // Campos del buscador — compartidos entre los distintos tabs
  const [destination, setDestination] = useState('')
  const [origin, setOrigin] = useState('')       // solo vuelos
  const [dateFrom, setDateFrom] = useState('')
  const [dateTo, setDateTo] = useState('')
  const [vehicleModel, setVehicleModel] = useState('') // solo vehículos

  const navigate = useNavigate()

  // Al pulsar "Buscar", navega a la página correspondiente al tab activo
  const handleSearch = () => {
    if (activeTab === 'hotels') navigate('/hotels')
    else if (activeTab === 'flights') navigate('/flights')
    else navigate('/vehicles')
  }

  return (
    // "relative" es necesario para que las imágenes absolutas se posicionen dentro de esta sección
    <section className="relative bg-gray-50 px-8 py-16">
      <div className="max-w-6xl mx-auto flex items-center gap-12">

        <div className={`flex-1 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className={`transition-all duration-150 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>

          {/* Título dinámico según el tab activo */}
          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            {activeTab === 'hotels'
              ? <>Encuentra tu próximo <span className="text-indigo-600">hotel.</span></>
              : activeTab === 'flights'
              ? <>Encuentra tu próximo <span className="text-indigo-600">vuelo.</span></>
              : <>Encuentra tu próximo <span className="text-indigo-600">vehículo.</span></>
            }
          </h1>

          {/* Subtítulo dinámico según el tab activo */}
          <p className="mt-4 text-gray-500 text-lg">
            {activeTab === 'hotels'
              ? 'Compara hoteles al mejor precio.'
              : activeTab === 'flights'
              ? 'Compara vuelos al mejor precio.'
              : 'Alquila el vehículo perfecto para tu viaje.'
            }
          </p>

          {/* Tabs de selección — icono + etiqueta
              w-16 fija el ancho de los 3 botones por igual (evita desalineación por texto más largo) */}
          <div className="flex gap-6 mt-8">

            {/* Tab Hoteles */}
            <button
              className="flex flex-col items-center gap-2 cursor-pointer w-16"
              onClick={() => switchTab('hotels')}
            >
              {/* El div cambia de color según si el tab está activo o no */}
              <div className={`p-3 rounded-xl border transition-colors ${
                activeTab === 'hotels'
                  ? 'bg-indigo-600 text-white border-indigo-600'
                  : 'bg-white text-gray-600 border-gray-300 hover:border-indigo-400'
              }`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2 22V9a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v13h-2v-3H4v3H2zm5-8h10v-2a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v2z"/>
                </svg>
              </div>
              <span className={`text-sm font-medium text-center ${activeTab === 'hotels' ? 'text-indigo-600' : 'text-gray-500'}`}>Hoteles</span>
            </button>

            {/* Tab Vuelos */}
            <button
              className="flex flex-col items-center gap-2 cursor-pointer w-16"
              onClick={() => switchTab('flights')}
            >
              <div className={`p-3 rounded-xl border transition-colors ${
                activeTab === 'flights'
                  ? 'bg-indigo-600 text-white border-indigo-600'
                  : 'bg-white text-gray-600 border-gray-300 hover:border-indigo-400'
              }`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
                </svg>
              </div>
              <span className={`text-sm font-medium text-center ${activeTab === 'flights' ? 'text-indigo-600' : 'text-gray-500'}`}>Vuelos</span>
            </button>

            {/* Tab Vehículos */}
            <button
              className="flex flex-col items-center gap-2 cursor-pointer w-16"
              onClick={() => switchTab('vehicles')}
            >
              <div className={`p-3 rounded-xl border transition-colors ${
                activeTab === 'vehicles'
                  ? 'bg-indigo-600 text-white border-indigo-600'
                  : 'bg-white text-gray-600 border-gray-300 hover:border-indigo-400'
              }`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                </svg>
              </div>
              <span className={`text-sm font-medium text-center ${activeTab === 'vehicles' ? 'text-indigo-600' : 'text-gray-500'}`}>Vehículos</span>
            </button>
          </div>

          {/* Buscador dinámico — cambia según el tab activo
              Hoteles: destino + fechas
              Vehículos: modelo + fechas de recogida/devolución
              Vuelos: origen + botón intercambio + destino + fechas */}
          {activeTab === 'hotels' ? (
            <div className="flex mt-6 bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
              <input
                type="text"
                placeholder="Destino, ciudad o hotel..."
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="flex-1 px-5 py-4 text-gray-700 outline-none border-r border-gray-200"
              />
              <input
                type="date"
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
                className="px-4 py-4 text-gray-700 outline-none border-r border-gray-200 cursor-pointer"
              />
              <input
                type="date"
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
                className="px-4 py-4 text-gray-700 outline-none border-r border-gray-200 cursor-pointer"
              />
              <button
                onClick={handleSearch}
                className="px-6 py-4 bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors cursor-pointer"
              >
                Buscar
              </button>
            </div>
          ) : activeTab === 'vehicles' ? (
            <div className="flex mt-6 bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
              <input
                type="text"
                placeholder="Modelo, marca o tipo..."
                value={vehicleModel}
                onChange={(e) => setVehicleModel(e.target.value)}
                className="flex-1 px-5 py-4 text-gray-700 outline-none border-r border-gray-200"
              />
              <input
                type="date"
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
                className="px-4 py-4 text-gray-700 outline-none border-r border-gray-200 cursor-pointer"
              />
              <input
                type="date"
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
                className="px-4 py-4 text-gray-700 outline-none border-r border-gray-200 cursor-pointer"
              />
              <button
                onClick={handleSearch}
                className="px-6 py-4 bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors cursor-pointer"
              >
                Buscar
              </button>
            </div>
          ) : (
            // Buscador de vuelos — tiene botón para intercambiar origen y destino
            <div className="flex mt-6 bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
              <input
                type="text"
                placeholder="Origen..."
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
                className="flex-1 px-5 py-4 text-gray-700 outline-none"
              />
              {/* Botón para intercambiar los valores de origen y destino */}
              <button
                onClick={() => { setOrigin(destination); setDestination(origin) }}
                className="px-3 text-gray-400 hover:text-indigo-600 transition-colors cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 3 4 7l4 4"/><path d="M4 7h16"/><path d="m16 21 4-4-4-4"/><path d="M20 17H4"/>
                </svg>
              </button>
              <input
                type="text"
                placeholder="Destino..."
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="flex-1 px-5 py-4 text-gray-700 outline-none border-r border-gray-200"
              />
              <input
                type="date"
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
                className="px-4 py-4 text-gray-700 outline-none border-r border-gray-200 cursor-pointer"
              />
              <input
                type="date"
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
                className="px-4 py-4 text-gray-700 outline-none border-r border-gray-200 cursor-pointer"
              />
              <button
                onClick={handleSearch}
                className="px-6 py-4 bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors cursor-pointer"
              >
                Buscar
              </button>
            </div>
          )}
          </div>{/* fin div animación tab */}
        </div>

        {/* Imágenes decorativas — posición absoluta dentro del <section relative>
            Las 3 se cargan al montar el componente para evitar delay al cambiar de tab.
            Solo se muestra la del tab activo, las demás quedan ocultas con "hidden".
            Para mover la imagen: cambia top-8 / right-50 por los valores que quieras */}
        <img src={hotelImg} alt="Hotel" className={`absolute top-8 right-50 w-80 h-60 object-cover rounded-2xl shadow-md transition-all ${activeTab === 'hotels' ? '' : 'hidden'} ${visible && contentVisible ? 'opacity-100 scale-100 duration-700' : 'opacity-0 scale-95 duration-150'}`} />
        <img src={flightImg} alt="Vuelo" className={`absolute top-8 right-50 w-80 h-60 object-cover rounded-2xl shadow-md transition-all ${activeTab === 'flights' ? '' : 'hidden'} ${visible && contentVisible ? 'opacity-100 scale-100 duration-700' : 'opacity-0 scale-95 duration-150'}`} />
        <img src={vehiculoImg} alt="Vehículo" className={`absolute top-8 right-50 w-80 h-60 object-cover rounded-2xl shadow-md transition-all ${activeTab === 'vehicles' ? '' : 'hidden'} ${visible && contentVisible ? 'opacity-100 scale-100 duration-700' : 'opacity-0 scale-95 duration-150'}`} />

      </div>
    </section>
  )
}
