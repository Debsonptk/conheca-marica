import { memo, useEffect } from 'react'

import { Container } from 'react-bootstrap'

import Footer from 'components/Footer'
import Header from 'components/Header'
import Titles from 'components/Titles'

import useTitle from 'hooks/useTitle'

const HoteisEPousadas: React.FC = () => {
  const setTitle = useTitle()

  useEffect(() => {
    setTitle('Hotéis e Pousadas | Conheça Maricá')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Header />
      <Container>
        <Titles title="Hotéis e Pousadas" />
      </Container>
      <Footer />
    </>
  )
}

export default memo(HoteisEPousadas)
