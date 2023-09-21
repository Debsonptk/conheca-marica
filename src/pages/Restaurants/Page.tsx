import { memo, useEffect } from 'react'

import { Col, Container, Row, Spinner } from 'react-bootstrap'

import { useRestaurants } from 'context/RestaurantContext'

import Footer from 'components/Footer'
import Header from 'components/Header'
import ItemsCard from 'components/ItemsCard'
import TagCategory from 'components/TagCategory'
import Titles from 'components/Titles'

import useTitle from 'hooks/useTitle'

const BaresERestaurantes: React.FC = () => {
  const setTitle = useTitle()
  const { isLoading, restaurants, restaurantCategory } = useRestaurants()

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
        <div className="d-flex flex-wrap pt-2 pb-4">
          {!isLoading &&
            Array.isArray(restaurantCategory) &&
            restaurantCategory.map((category) => (
              <div key={category.id}>
                <TagCategory category={category} />
              </div>
            ))}
        </div>
        <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 pb-5">
          {!isLoading &&
            Array.isArray(restaurants) &&
            restaurants.map((item) => (
              <Col key={item.id} className="d-flex">
                <ItemsCard item={item} endPoint="bares-e-restaurantes" />
              </Col>
            ))}
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export default memo(BaresERestaurantes)
