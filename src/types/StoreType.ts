export type CategoryStoreType = {
  id: number
  label: string
  count?: number
}

export type AdressStoreType = {
  id: number
  lat: number
  lng: number
  label: string
}

export type StoreType = {
  id: number
  nome: string
  capa: string
  lat: number
  lng: number
  categorias: CategoryStoreType[]
  enderecos: AdressStoreType[]
}

export type ItemStoreType = {
  addresses: {
    id: number
    label: string
    lat: number
    lng: number
  }[]
  formas_pagamento: {
    icone: string
    label: string
  }[]
  categorias: {
    id: number
    label: string
  }[]
  descricao_t: string
  site: string
  email: string
  dicas_t: string
  estruturas: {
    icone: string
    label: string
  }[]
  gratuito: number
  horario_funcionamento: []
  id: number
  images: {
    id: number
    src: string
  }[]
  nome: string
  panorama: []
  phones: {
    id: number
    nome: string
    number: string
    order: number
    whatsapp: boolean
  }[]
  redes: {
    icone: string
    nome: string
    url: string
    user: string
  }[]
  restricoes: {
    icone: string
    label: string
  }[]
  viajantes: {
    label: string
  }[]
}
