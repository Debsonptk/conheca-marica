import { memo } from 'react'

import { HotelsProvider } from 'context/HotelContext'

import Page from './Page'

const HoteisEPousadasContainer: React.FC = () => {
  return (
    <HotelsProvider>
      <Page />
    </HotelsProvider>
  )
}

export default memo(HoteisEPousadasContainer)
