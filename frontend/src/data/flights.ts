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
  {
    id: 3,
    airline: 'Ryanair',
    origin: 'Madrid (MAD)',
    destination: 'Londres (STN)',
    departureDate: '2026-04-22',
    duration: '2h 20m',
    price: 65,
  },
  {
    id: 4,
    airline: 'Air Europa',
    origin: 'Madrid (MAD)',
    destination: 'Buenos Aires (EZE)',
    departureDate: '2026-05-01',
    duration: '13h 10m',
    price: 720,
  },
  {
    id: 5,
    airline: 'Lufthansa',
    origin: 'Barcelona (BCN)',
    destination: 'Tokio (NRT)',
    departureDate: '2026-05-10',
    duration: '14h 45m',
    price: 890,
  },
  {
    id: 6,
    airline: 'EasyJet',
    origin: 'Madrid (MAD)',
    destination: 'Ámsterdam (AMS)',
    departureDate: '2026-04-28',
    duration: '2h 50m',
    price: 88,
  },
  {
    id: 7,
    airline: 'Emirates',
    origin: 'Madrid (MAD)',
    destination: 'Dubái (DXB)',
    departureDate: '2026-05-05',
    duration: '7h 15m',
    price: 540,
  },
  {
    id: 8,
    airline: 'Iberia',
    origin: 'Madrid (MAD)',
    destination: 'Ciudad de México (MEX)',
    departureDate: '2026-05-12',
    duration: '11h 00m',
    price: 610,
  },
  {
    id: 9,
    airline: 'Vueling',
    origin: 'Valencia (VLC)',
    destination: 'Roma (FCO)',
    departureDate: '2026-04-25',
    duration: '1h 55m',
    price: 95,
  },
  {
    id: 10,
    airline: 'Wizz Air',
    origin: 'Barcelona (BCN)',
    destination: 'Varsovia (WAW)',
    departureDate: '2026-05-08',
    duration: '2h 40m',
    price: 72,
  },
]
