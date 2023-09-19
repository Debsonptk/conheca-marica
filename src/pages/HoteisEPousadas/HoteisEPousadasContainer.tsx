import { memo } from 'react'

import { HotelsProvider } from 'context/HotelContext'

import HoteisEPousadas from './HoteisEPousadas'

const HoteisEPousadasContainer: React.FC = () => {
  return (
    <HotelsProvider>
      <HoteisEPousadas />
    </HotelsProvider>
  )
}

export default memo(HoteisEPousadasContainer)
