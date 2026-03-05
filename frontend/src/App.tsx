import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Resources from './pages/Resources'
import ResourceDetail from './pages/ResourceDetail'
import BookingForm from './pages/BookingForm'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/resources/:id" element={<ResourceDetail />} />
        <Route path="/resources/:id/book" element={<BookingForm />} />
      </Routes>
    </>
  )
}

export default App
