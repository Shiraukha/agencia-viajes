// Newsletter — banner de suscripción por email en la home
// El formulario es visual de momento (sin backend), preparado para conectar en la Fase 2

import { useState } from 'react'

export default function Newsletter() {
  // Controla el valor del input y el estado de envío (idle / sent)
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  // Simula el envío — cuando haya backend se reemplaza por una llamada a la API
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setSent(true)
  }

  return (
    <section className="bg-indigo-600 py-14 px-8">
      <div className="max-w-2xl mx-auto text-center flex flex-col gap-4">

        <h2 className="text-2xl font-bold text-white">
          Recibe las mejores ofertas antes que nadie
        </h2>
        <p className="text-indigo-200 text-sm">
          Suscríbete y te avisamos cuando aparezcan vuelos, hoteles y vehículos con descuento.
        </p>

        {/* Muestra el formulario o el mensaje de confirmación según el estado */}
        {sent ? (
          <p className="text-white font-semibold mt-2">
            Perfecto, te avisaremos pronto.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 mt-2"
          >
            {/* Input de email — ocupa todo el espacio disponible */}
            <input
              type="email"
              placeholder="Tu correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-3 rounded-xl text-gray-900 text-sm placeholder-gray-400 outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-indigo-50 transition-colors cursor-pointer whitespace-nowrap"
            >
              Suscribirme
            </button>
          </form>
        )}

      </div>
    </section>
  )
}
