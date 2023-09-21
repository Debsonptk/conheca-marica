import { memo, useEffect } from 'react'

import { Container, Spinner } from 'react-bootstrap'

import { useHotels } from 'context/HotelContext'

import Footer from 'components/Footer'
import Header from 'components/Header'
import Titles from 'components/Titles'

import useTitle from 'hooks/useTitle'

const HoteisEPousadas: React.FC = () => {
  const setTitle = useTitle()
  const { isLoading } = useHotels()

  useEffect(() => {
    setTitle('Hotéis e Pousadas | Conheça Maricá')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Header />
      <Container>
        <Titles title="Hotéis e Pousadas" />
        {isLoading && (
          <div className="d-flex justify-content-center pb-4">
            <Spinner animation="border" variant="secondary" />
          </div>
        )}
      </Container>
      <Footer />
    </>
  )
}

export default memo(HoteisEPousadas)
