export type CategoryBusinessType = {
  id: number
  label: string
  count?: number
}

export type AdressBusinessType = {
  id: number
  lat: number
  lng: number
  label: string
}

export type BusinessType = {
  id: number
  name: string
  capa: string
  lat: number
  lng: number
  categorias: CategoryBusinessType[]
  enderecos: AdressBusinessType[]
}
