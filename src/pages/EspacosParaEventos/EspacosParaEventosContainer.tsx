import { memo } from 'react'

import { SpacesProvider } from 'context/SpaceContext'

import EspacosParaEventos from './EspacosParaEventos'

const EspacosParaEventosContainer: React.FC = () => {
  return (
    <SpacesProvider>
      <EspacosParaEventos />
    </SpacesProvider>
  )
}

export default memo(EspacosParaEventosContainer)
