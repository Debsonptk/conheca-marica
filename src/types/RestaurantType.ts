export type CategoryRestaurantType = {
  id: number
  label: string
  count?: number
}

export type AdressRestaurantType = {
  id: number
  lat: number
  lng: number
  label: string
}

export type RestaurantType = {
  id: number
  nome: string
  capa: string
  lat: number
  lgn: number
  categorias: CategoryRestaurantType[]
  enderecos: AdressRestaurantType[]
}
