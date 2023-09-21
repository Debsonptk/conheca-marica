import { memo } from 'react'

import { RestaurantsProvider } from 'context/RestaurantContext'

import BaresERestaurantes from './Page'

const BaresERestaurantContainer: React.FC = () => {
  return (
    <RestaurantsProvider>
      <BaresERestaurantes />
    </RestaurantsProvider>
  )
}

export default memo(BaresERestaurantContainer)
