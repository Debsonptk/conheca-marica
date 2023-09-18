export type CategoryEventType = {
  id: number
  label: string
  count?: number
}

export type AdressEventType = {
  id: number
  lat: number
  lng: number
  label: string
}

export type EventType = {
  id: number
  name: string
  capa: string
  lat: number
  lng: number
  categorias: CategoryEventType[]
  enderecos: AdressEventType[]
}
