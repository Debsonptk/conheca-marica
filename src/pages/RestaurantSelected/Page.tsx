import { memo, useEffect } from 'react'

import { Container, Spinner } from 'react-bootstrap'

import { useRestaurants } from 'context/RestaurantContext'

import Footer from 'components/Footer'
import Header from 'components/Header'
import Titles from 'components/Titles'

import useTitle from 'hooks/useTitle'

const BaresERestaurantes: React.FC = () => {
  const setTitle = useTitle()
  const { isLoading } = useRestaurants()

  useEffect(() => {
    setTitle('Bares e Restaurantes | Conheça Maricá')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Header />
      <Container>
        <Titles title="Bares e Restaurantes" />
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

export default memo(BaresERestaurantes)
