import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Bienvenido a la Agencia de Viajes</h1>
      <p style={{ marginTop: '1rem', color: '#555' }}>
        Reserva pistas deportivas, salas y mucho más.
      </p>
      <button
        style={{ marginTop: '2rem', padding: '0.75rem 2rem', fontSize: '1rem', cursor: 'pointer' }}
        onClick={() => navigate('/resources')}
      >
        Ver recursos disponibles
      </button>
    </main>
  )
}
