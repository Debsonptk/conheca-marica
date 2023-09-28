import { memo } from 'react'

import { AboutProvider } from 'context/AboutContext'

import Page from './Page'

const AboutContainer: React.FC = () => {
  return (
    <AboutProvider>
      <Page />
    </AboutProvider>
  )
}

export default memo(AboutContainer)
