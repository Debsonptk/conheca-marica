export type CategoryTouristSpotType = {
  id: number
  label: string
  count?: number
}

export type AdressTouristSpotType = {
  id: number
  lat: number
  lng: number
  label: string
}

export type TouristSpotType = {
  id: number
  nome: string
  capa: string
  lat: number
  lng: number
  categorias: CategoryTouristSpotType[]
  enderecos: AdressTouristSpotType[]
}
