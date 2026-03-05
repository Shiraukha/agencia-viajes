import { useState } from 'react'
import { useParams, useLocation } from 'react-router-dom'

export default function BookingForm() {
  const { id } = useParams()
  const location = useLocation()
  const isHotel = location.pathname.startsWith('/hotels')

  const [form, setForm] = useState({
    name: '',
    email: '',
    checkIn: '',
    checkOut: '',
    passengers: '1',
  })
  const [confirmed, setConfirmed] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setConfirmed(true)
  }

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
