export type Resource = {
  id: number
  name: string
  description: string
  type: string
}

export const resources: Resource[] = [
  {
    id: 1,
    name: 'Pista de Tenis 1',
    description: 'Pista de tenis exterior con iluminación nocturna.',
    type: 'Pista deportiva',
  },
  {
    id: 2,
    name: 'Sala de Reuniones A',
    description: 'Sala equipada con proyector y capacidad para 10 personas.',
    type: 'Sala',
  },
  {
    id: 3,
    name: 'Pista de Pádel 1',
    description: 'Pista de pádel cubierta disponible todo el año.',
    type: 'Pista deportiva',
  },
  {
    id: 4,
    name: 'Sala de Formación B',
    description: 'Sala amplia con pizarra y capacidad para 30 personas.',
    type: 'Sala',
  },
]
