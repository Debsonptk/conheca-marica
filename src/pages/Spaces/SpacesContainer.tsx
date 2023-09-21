import { memo } from 'react'

import { SpacesProvider } from 'context/SpaceContext'

import Page from './Page'

const EspacosParaEventosContainer: React.FC = () => {
  return (
    <SpacesProvider>
      <Page />
    </SpacesProvider>
  )
}

export default memo(EspacosParaEventosContainer)
