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

export type ItemBusinessType = {
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
