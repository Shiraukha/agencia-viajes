import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="flex gap-6 px-8 py-4 bg-white border-b border-gray-200">
      <Link to="/" className="text-gray-700 hover:text-indigo-600 font-medium">Inicio</Link>
      <Link to="/resources" className="text-gray-700 hover:text-indigo-600 font-medium">Recursos</Link>
    </nav>
  )
}
