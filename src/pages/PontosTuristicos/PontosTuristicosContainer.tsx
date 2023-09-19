import { memo } from 'react'

import { SpotsProvider } from 'context/SpotContext'

import PontosTuristicos from './PontosTuristicos'

const PontosTuristicosContainer: React.FC = () => {
  return (
    <SpotsProvider>
      <PontosTuristicos />
    </SpotsProvider>
  )
}

export default memo(PontosTuristicosContainer)
