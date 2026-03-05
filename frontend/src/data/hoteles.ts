export type Hotel = {
  id: number
  name: string
  location: string
  description: string
  stars: number
  pricePerNight: number
}

export const hotels: Hotel[] = [
  {
    id: 1,
    name: 'Hotel Arts Barcelona',
    location: 'Barcelona, España',
    description: 'Hotel de lujo frente al mar con vistas al Mediterráneo y al skyline de Barcelona.',
    stars: 5,
    pricePerNight: 320,
  },
  {
    id: 2,
    name: 'Hostal Central Madrid',
    location: 'Madrid, España',
    description: 'Hostal céntrico en el corazón de Madrid, a 5 minutos del Museo del Prado.',
    stars: 3,
    pricePerNight: 85,
  },
]
