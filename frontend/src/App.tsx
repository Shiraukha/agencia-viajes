import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Hotels from './pages/Hotels'
import Flights from './pages/Flights'
import Vehicles from './pages/Vehicles'
import HotelDetail from './pages/HotelDetail'
import FlightDetail from './pages/FlightDetail'
import VehicleDetail from './pages/VehicleDetail'
import BookingForm from './pages/BookingForm'
import './App.css'

// Root component — defines the global layout (Navbar always visible) and all routes
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Listing pages */}
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/vehicles" element={<Vehicles />} />

        {/* Detail pages — :id is the item ID from mock data */}
        <Route path="/hotels/:id" element={<HotelDetail />} />
        <Route path="/flights/:id" element={<FlightDetail />} />
        <Route path="/vehicles/:id" element={<VehicleDetail />} />

        {/* Booking form — shared component, detects type from the URL */}
        <Route path="/hotels/:id/book" element={<BookingForm />} />
        <Route path="/flights/:id/book" element={<BookingForm />} />
        <Route path="/vehicles/:id/book" element={<BookingForm />} />
      </Routes>
    </>
  )
}

export default App
