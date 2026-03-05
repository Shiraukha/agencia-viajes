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
  {
    id: 3,
    name: 'Hotel Negresco',
    location: 'Niza, Francia',
    description: 'Icónico palace belle époque a orillas del Mediterráneo con interiorismo único.',
    stars: 5,
    pricePerNight: 450,
  },
  {
    id: 4,
    name: 'The Hoxton Rome',
    location: 'Roma, Italia',
    description: 'Hotel boutique en el centro histórico de Roma, a pasos del Panteón.',
    stars: 4,
    pricePerNight: 195,
  },
  {
    id: 5,
    name: 'Mama Shelter Lisboa',
    location: 'Lisboa, Portugal',
    description: 'Hotel moderno y vibrante en el barrio de Mouraria con terracas y restaurante.',
    stars: 4,
    pricePerNight: 140,
  },
  {
    id: 6,
    name: 'Pensión Antigua Sevilla',
    location: 'Sevilla, España',
    description: 'Pensión familiar en el barrio de Santa Cruz, rodeada de tapas y flamenco.',
    stars: 2,
    pricePerNight: 55,
  },
  {
    id: 7,
    name: 'Hotel Baur au Lac',
    location: 'Zúrich, Suiza',
    description: 'Legendario hotel junto al lago de Zúrich con vistas a los Alpes suizos.',
    stars: 5,
    pricePerNight: 680,
  },
  {
    id: 8,
    name: 'Generator Amsterdam',
    location: 'Ámsterdam, Países Bajos',
    description: 'Hotel diseño en el barrio de De Pijp, ideal para viajeros jóvenes y creativos.',
    stars: 3,
    pricePerNight: 95,
  },
  {
    id: 9,
    name: 'Hotel Excelsior Venecia',
    location: 'Venecia, Italia',
    description: 'Hotel histórico en el Lido de Venecia con acceso privado a la playa.',
    stars: 5,
    pricePerNight: 390,
  },
  {
    id: 10,
    name: 'Ibis Budget Berlín',
    location: 'Berlín, Alemania',
    description: 'Hotel económico bien comunicado, perfecto para explorar la capital alemana.',
    stars: 2,
    pricePerNight: 62,
  },
]
