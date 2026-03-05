export type Flight = {
  id: number
  airline: string
  origin: string
  destination: string
  departureDate: string
  duration: string
  price: number
}

export const flights: Flight[] = [
  {
    id: 1,
    airline: 'Iberia',
    origin: 'Madrid (MAD)',
    destination: 'Nueva York (JFK)',
    departureDate: '2026-04-15',
    duration: '9h 30m',
    price: 480,
  },
  {
    id: 2,
    airline: 'Vueling',
    origin: 'Barcelona (BCN)',
    destination: 'París (CDG)',
    departureDate: '2026-04-20',
    duration: '2h 05m',
    price: 110,
  },
]
