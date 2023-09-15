import { memo, useEffect } from 'react'

import { Container } from 'react-bootstrap'

import AppSection from 'components/AppSection'
import Footer from 'components/Footer'
import Header from 'components/Header'

import useTitle from 'hooks/useTitle'

const Home: React.FC = () => {
  const setTitle = useTitle()

  useEffect(() => {
    setTitle('Home')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Header />
      <Container>
        <h1>Main</h1>
      </Container>
      <AppSection />
      <Footer />
    </>
  )
}

export default memo(Home)
