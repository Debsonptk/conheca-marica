import { memo } from 'react'

import { StoresProvider } from 'context/StoreContext'

import Page from './Page'

const ComercioLocalContainer: React.FC = () => {
  return (
    <StoresProvider>
      <Page />
    </StoresProvider>
  )
}

export default memo(ComercioLocalContainer)
