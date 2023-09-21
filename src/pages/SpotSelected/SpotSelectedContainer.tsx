import { memo } from 'react'

import { SpotsProvider } from 'context/SpotContext'

import Page from './Page'

const PontosTuristicosContainer: React.FC = () => {
  return (
    <SpotsProvider>
      <Page />
    </SpotsProvider>
  )
}

export default memo(PontosTuristicosContainer)
