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
  nome: string
  capa: string
  lat: number
  lng: number
  categorias: CategoryHotelType[]
  enderecos: AdressHotelType[]
  descricao_t: string
}

export type ItemHotelType = {
  id: string
  nome: string
  email: string
  site: string
  quartos: number
  leitos: number | null
  cafe_manha: boolean
  cafe_hospedes: boolean
  almoco: boolean
  almoco_hospedes: boolean
  jantar: boolean
  jantar_hospedes: boolean
  descricao_t: string
  addresses: {
    id: string
    lat: string
    lng: string
    label: string
  }[]
  images: {
    id: string
    legenda: {
      pt_BR: string | null
    }[]
    ordem: string
    src: string
  }[]
  horario_funcionamento: []
  phones: {
    id: string
    nome: string
    whatsapp: boolean
    ordem: boolean
    number: string
  }[]
  categorias: CategoryHotelType[]
  estruturas: {
    icone: string
    label: string
  }[]
  formas_pagamento: {
    icone: string
    label: string
  }[]
  redes: {
    nome: string
    icone: string
    url: string
    user: string
  }[]
  restricoes: {
    icone: string
    label: string
  }[]
  panoramas: []
}
