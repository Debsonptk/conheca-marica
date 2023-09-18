export type CategorySpaceType = {
  id: number
  label: string
  count?: number
}
export type AdressSpaceType = {
  id: number
  lat: number
  lng: number
  label: string
}

export type SpaceType = {
  id: number
  name: string
  capa: string
  lat: number
  lng: number
  categorias: CategorySpaceType[]
  enderecos: AdressSpaceType[]
}
