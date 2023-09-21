import { memo, useEffect } from 'react'

import { Container, Spinner } from 'react-bootstrap'

import { useSpaces } from 'context/SpaceContext'

import Footer from 'components/Footer'
import Header from 'components/Header'
import Titles from 'components/Titles'

import useTitle from 'hooks/useTitle'

const EspacosParaEventos: React.FC = () => {
  const setTitle = useTitle()
  const { isLoading } = useSpaces()

  useEffect(() => {
    setTitle('Delivery | Espaços para Eventos')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Header />
      <Container>
        <Titles title="Espaços para Eventos" />
        {isLoading && (
          <div className="d-flex justify-content-center">
            <Spinner animation="border" variant="secondary" />
          </div>
        )}
      </Container>
      <Footer />
    </>
  )
}

export default memo(EspacosParaEventos)
