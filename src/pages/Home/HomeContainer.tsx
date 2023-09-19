import { memo } from 'react'

import { BannersProvider } from 'context/BannerContext'

import Home from './Home'

const HomeContainer: React.FC = () => {
  return (
    <BannersProvider>
      <Home />
    </BannersProvider>
  )
}

export default memo(HomeContainer)
