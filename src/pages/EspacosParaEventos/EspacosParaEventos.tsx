import { memo, useEffect } from 'react'

import { Container } from 'react-bootstrap'

import Footer from 'components/Footer'
import Header from 'components/Header'
import Titles from 'components/Titles'

import useTitle from 'hooks/useTitle'

const EspacosParaEventos: React.FC = () => {
  const setTitle = useTitle()

  useEffect(() => {
    setTitle('Delivery | Espaços para Eventos')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Header />
      <Container>
        <Titles title="Espaços para Eventos" />
      </Container>
      <Footer />
    </>
  )
}

export default memo(EspacosParaEventos)
