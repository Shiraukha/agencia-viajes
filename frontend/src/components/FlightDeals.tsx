// FlightDeals — sección de ofertas de vuelo en la home
// Usa los vuelos de data/flights.ts y los muestra como tarjetas en carrusel
// Incluye flechas de navegación para desplazarse por las tarjetas

import { useRef } from 'react'
import { flights } from '../data/flights'

// Extrae el nombre de la ciudad del destino, eliminando el código de aeropuerto
// Ej: "París (CDG)" → "París"
const cityName = (destination: string) => destination.replace(/\s*\(.*?\)/, '').trim()

// Genera una URL de imagen de picsum usando el nombre de ciudad como semilla
// Así cada destino tiene siempre la misma imagen aleatoria
const cityImage = (destination: string) =>
  `https://picsum.photos/seed/${cityName(destination).toLowerCase()}/400/300`

// Formatea una fecha ISO (2026-04-15) a un formato más legible (15/4)
const formatDate = (iso: string) => {
  const d = new Date(iso)
  return `${d.getDate()}/${d.getMonth() + 1}`
}

// El precio máximo se calcula automáticamente a partir de los vuelos
const maxPrice = Math.max(...flights.map((f) => f.price))

export default function FlightDeals() {
  // Referencia al contenedor del carrusel para poder hacer scroll programático
  const scrollRef = useRef<HTMLDivElement>(null)

  // Desplaza el carrusel hacia la izquierda o derecha al pulsar las flechas
  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({
      left: direction === 'right' ? 320 : -320,
      behavior: 'smooth',
    })
  }

  return (
    <section className="px-8 py-12 max-w-6xl mx-auto">

      {/* Cabecera de la sección: título a la izquierda, enlace "Explorar" a la derecha */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Ofertas de viaje por menos de {maxPrice} €
        </h2>
        <button className="text-gray-700 font-semibold flex items-center gap-1 hover:text-indigo-600 transition-colors cursor-pointer">
          Explorar
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6"/>
          </svg>
        </button>
      </div>

      {/* Carrusel de tarjetas — scroll horizontal, scrollbar oculta visualmente */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth pb-2"
        style={{ scrollbarWidth: 'none' }}
      >
        {flights.map((flight) => (
          <div
            key={flight.id}
            className="flex-shrink-0 w-64 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow cursor-pointer overflow-hidden"
          >
            {/* Imagen generada a partir del nombre del destino */}
            <img
              src={cityImage(flight.destination)}
              alt={cityName(flight.destination)}
              className="w-full h-40 object-cover"
            />

            {/* Info de la oferta */}
            <div className="p-4 flex flex-col gap-1">
              <h3 className="text-lg font-bold text-gray-900">{cityName(flight.destination)}</h3>
              <p className="text-sm text-gray-500">{flight.duration}, {flight.airline}</p>
              <p className="text-sm text-gray-500">
                {flight.origin.replace(/\s*\(.*?\)/, '')}
                <span className="mx-1 text-gray-400">›</span>
                {formatDate(flight.departureDate)}
              </p>
              <p className="text-base font-bold text-gray-900 mt-2">
                desde {flight.price} €
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Flechas de navegación — abajo a la derecha */}
      <div className="flex justify-end gap-2 mt-4">
        <button
          onClick={() => scroll('left')}
          className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 hover:border-indigo-400 hover:text-indigo-600 transition-colors cursor-pointer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6"/>
          </svg>
        </button>
        <button
          onClick={() => scroll('right')}
          className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 hover:border-indigo-400 hover:text-indigo-600 transition-colors cursor-pointer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6"/>
          </svg>
        </button>
      </div>

    </section>
  )
}
