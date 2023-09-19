import { memo } from 'react'

import { StoresProvider } from 'context/StoreContext'

import ComercioLocal from './ComercioLocal'

const ComercioLocalContainer: React.FC = () => {
  return (
    <StoresProvider>
      <ComercioLocal />
    </StoresProvider>
  )
}

export default memo(ComercioLocalContainer)
