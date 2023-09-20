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
  nome: string
  capa: string
  lat: number
  lng: number
  categorias: CategoryEventType[]
  enderecos: AdressEventType[]
}

export type ItemEventType = {
  addresses: {
    id: number
    label: string
    lat: number
    lng: number
  }[]
  categorias: {
    id: number
    label: string
  }[]
  descricao_t: string
  dicas_t: string
  estruturas: {
    icone: string
    label: string
  }[]
  formas_pagamento: []
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
