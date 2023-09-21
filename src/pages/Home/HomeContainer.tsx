import { memo } from 'react'

import { BannersProvider } from 'context/BannerContext'

import Page from './Page'

const HomeContainer: React.FC = () => {
  return (
    <BannersProvider>
      <Page />
    </BannersProvider>
  )
}

export default memo(HomeContainer)
