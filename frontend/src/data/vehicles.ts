export type Vehicle = {
  id: number
  brand: string
  model: string
  location: string
  description: string
  pricePerDay: number
  type: string
}

export const vehicles: Vehicle[] = [
  {
    id: 1,
    brand: 'Tesla',
    model: 'Model 3',
    location: 'Barcelona, España',
    description: 'Eléctrico, automático, con autopilot incluido.',
    pricePerDay: 95,
    type: 'Eléctrico',
  },
  {
    id: 2,
    brand: 'Renault',
    model: 'Clio',
    location: 'Madrid, España',
    description: 'Compacto, económico, ideal para ciudad.',
    pricePerDay: 35,
    type: 'Turismo',
  },
  {
    id: 3,
    brand: 'BMW',
    model: 'X5',
    location: 'Madrid, España',
    description: 'SUV de lujo con tracción total y techo panorámico.',
    pricePerDay: 140,
    type: 'SUV',
  },
  {
    id: 4,
    brand: 'Volkswagen',
    model: 'Transporter',
    location: 'Valencia, España',
    description: 'Furgoneta amplia, perfecta para grupos o mudanzas.',
    pricePerDay: 75,
    type: 'Furgoneta',
  },
]
