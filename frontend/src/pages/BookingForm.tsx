// BookingForm — formulario de reserva compartido para hoteles, vuelos y vehículos
// Se reutiliza en las rutas: /hotels/:id/book, /flights/:id/book, /vehicles/:id/book
// Detecta el tipo de reserva leyendo la URL actual con useLocation

import { useState } from 'react'
import { useParams, useLocation } from 'react-router-dom'

export default function BookingForm() {
  // id — el identificador del elemento que se está reservando (viene de la URL)
  const { id } = useParams()
  const location = useLocation()

  // Detecta si es una reserva de hotel mirando si la URL empieza por /hotels
  // Si es true → muestra campo de entrada + salida
  // Si es false → muestra solo un campo de fecha (vuelos/vehículos)
  const isHotel = location.pathname.startsWith('/hotels')

  // Estado del formulario — todos los campos en un solo objeto
  // Se actualiza con handleChange usando el atributo "name" de cada input
  const [form, setForm] = useState({
    name: '',
    email: '',
    checkIn: '',
    checkOut: '',
    passengers: '1',
  })

  // Controla si mostrar la pantalla de confirmación o el formulario
  const [confirmed, setConfirmed] = useState(false)

  // Actualiza el campo correspondiente en el estado usando el name del input
  // Usa spread operator para no perder los otros campos al actualizar uno
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  // Al enviar el formulario, evita la recarga de página y muestra la confirmación
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setConfirmed(true)
  }

  // Si el usuario ya ha enviado el formulario, muestra pantalla de éxito
  if (confirmed) {
    return (
      <main className="p-8 max-w-lg mx-auto text-center">
        <h1 className="text-3xl font-bold text-green-600">Reserva confirmada</h1>
        <p className="mt-4 text-gray-600">
          Gracias, <strong>{form.name}</strong>. Recibirás la confirmación en <strong>{form.email}</strong>.
        </p>
      </main>
    )
  }

  return (
    <main className="p-8 max-w-lg mx-auto">
      <h1 className="text-3xl font-bold text-gray-800">
        Reservar {isHotel ? 'hotel' : 'vuelo'} #{id}
      </h1>

      <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">

        {/* Campos comunes para todos los tipos de reserva */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">Nombre completo</label>
          <input
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">Email</label>
          <input
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Campos de fecha — diferentes según el tipo de reserva
            Hoteles: fecha de entrada + fecha de salida
            Vuelos/Vehículos: solo una fecha */}
        {isHotel ? (
          <>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Fecha de entrada</label>
              <input
                name="checkIn"
                type="date"
                required
                value={form.checkIn}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Fecha de salida</label>
              <input
                name="checkOut"
                type="date"
                required
                value={form.checkOut}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
          </>
        ) : (
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Fecha del vuelo</label>
            <input
              name="checkIn"
              type="date"
              required
              value={form.checkIn}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
        )}

        {/* Selector de número de personas — opciones del 1 al 6 generadas dinámicamente */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-gray-700">Número de personas</label>
          <select
            name="passengers"
            value={form.passengers}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="mt-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors cursor-pointer font-medium"
        >
          Confirmar reserva
        </button>
      </form>
    </main>
  )
}
