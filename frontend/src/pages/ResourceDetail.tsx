import { useParams } from 'react-router-dom'

export default function ResourceDetail() {
  const { id } = useParams()

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Detalle del recurso #{id}</h1>
      <p style={{ marginTop: '1rem', color: '#555' }}>
        Aquí aparecerá el calendario de disponibilidad (próximamente).
      </p>
    </main>
  )
}
