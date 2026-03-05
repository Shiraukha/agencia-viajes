import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Hotels from './pages/Hotels'
import Flights from './pages/Flights'
import HotelDetail from './pages/HotelDetail'
import FlightDetail from './pages/FlightDetail'
import BookingForm from './pages/BookingForm'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/hotels/:id" element={<HotelDetail />} />
        <Route path="/flights/:id" element={<FlightDetail />} />
        <Route path="/hotels/:id/book" element={<BookingForm />} />
        <Route path="/flights/:id/book" element={<BookingForm />} />
      </Routes>
    </>
  )
}

export default App
