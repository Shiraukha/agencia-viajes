import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      gap: '1.5rem',
      padding: '1rem 2rem',
      backgroundColor: '#fff',
      borderBottom: '1px solid #ddd',
    }}>
      <Link to="/">Inicio</Link>
      <Link to="/resources">Recursos</Link>
    </nav>
  )
}
