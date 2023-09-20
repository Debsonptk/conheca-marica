import { memo, useEffect } from 'react'

import { Col, Container, Row, Spinner } from 'react-bootstrap'

import { useHotels } from 'context/HotelContext'

import Footer from 'components/Footer'
import Header from 'components/Header'
import ItemsCard from 'components/ItemsCard'
import TagCategory from 'components/TagCategory'
import Titles from 'components/Titles'

import useTitle from 'hooks/useTitle'

const HoteisEPousadas: React.FC = () => {
  const setTitle = useTitle()
  const { isLoading, hotels, hotelsCategory } = useHotels()

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
        <div className="d-flex -flex-wrap pt-2 pb-4">
          {!isLoading &&
            Array.isArray(hotelsCategory) &&
            hotelsCategory.map((category) => (
              <div key={category.id}>
                <TagCategory category={category} />
              </div>
            ))}
        </div>
        <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 pb-5">
          {!isLoading &&
            Array.isArray(hotels) &&
            hotels.map((item) => (
              <Col key={item.id} className="d-flex">
                <ItemsCard item={item} endPoint="hoteis-e-pousadas" />
              </Col>
            ))}
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export default memo(HoteisEPousadas)
