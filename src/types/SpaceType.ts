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
  nome: string
  capa: string
  lat: number
  lng: number
  categorias: CategorySpaceType[]
  enderecos: AdressSpaceType[]
}

export type ItemSpaceType = {
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
  site: string
  email: string
  dicas_t: string
  estruturas: {
    icone: string
    label: string
  }[]
  formas_pagamento: {
    icone: string
    label: string
  }[]
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
  espacos: {
    id: number
    espaco_id: number
    nome: string
    descricao: string
    area: number
    pe_direito: number
    medidas: string
    capacidade: number
    ordem: number
  }[]
}
