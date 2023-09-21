import { memo, useEffect } from 'react'

import { Col, Container, Row, Spinner } from 'react-bootstrap'

import { useSpots } from 'context/SpotContext'

import Footer from 'components/Footer'
import Header from 'components/Header'
import ItemsCard from 'components/ItemsCard'
import TagCategory from 'components/TagCategory'
import Titles from 'components/Titles'

import useTitle from 'hooks/useTitle'

const PontosTuristicos: React.FC = () => {
  const setTitle = useTitle()
  const { isLoading, spotCategory, spots } = useSpots()

  useEffect(() => {
    setTitle('Pontos Turísticos | Conheça Maricá')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Header />
      <Container>
        <Titles title="Pontos Turísticos" />
        {isLoading && (
          <div className="d-flex justify-content-center pb-4">
            <Spinner animation="border" variant="secondary" />
          </div>
        )}
        <div className="d-flex flex-wrap pt-2 pb-4">
          {!isLoading &&
            Array.isArray(spotCategory) &&
            spotCategory.map((category) => (
              <div key={category.id}>
                <TagCategory category={category} />
              </div>
            ))}
        </div>
        <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 pb-5">
          {!isLoading &&
            Array.isArray(spots) &&
            spots.map((item) => (
              <Col key={item.id} className="d-flex">
                <ItemsCard item={item} endPoint="pontos-turisticos" />
              </Col>
            ))}
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export default memo(PontosTuristicos)
