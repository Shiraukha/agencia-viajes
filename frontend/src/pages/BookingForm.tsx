import { useParams } from 'react-router-dom'

export default function BookingForm() {
  const { id } = useParams()

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Reservar recurso #{id}</h1>
      <p style={{ marginTop: '1rem', color: '#555' }}>
        Aquí aparecerá el formulario de reserva (próximamente).
      </p>
    </main>
  )
}
