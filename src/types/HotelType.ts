export type CategoryHotelType = {
  id: number
  label: string
  count?: number
}

export type AdressHotelType = {
  id: number
  lat: number
  lng: number
  label: string
}

export type HotelType = {
  id: number
  name: string
  capa: string
  lat: number
  lng: number
  categorias: CategoryHotelType[]
  enderecos: AdressHotelType[]
}
