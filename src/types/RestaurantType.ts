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

export type ItemRestaurantType = {
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
  formas_pagamento: {
    icone: string
    label: string
  }[]
  cozinhas: {
    label: string
  }[]
  refeicoes: {
    label: string
  }[]
  email: string
  faixa_preco: number
  site: string
  gratuito: number
  horario_funcionamento: {
    label: string
    is24: boolean
    horario: {
      abre: string
      fecha: string
    }
  }[]
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
