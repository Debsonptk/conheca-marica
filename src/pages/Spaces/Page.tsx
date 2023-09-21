import { memo, useEffect } from 'react'

import { Col, Container, Row, Spinner } from 'react-bootstrap'

import { useSpaces } from 'context/SpaceContext'

import Footer from 'components/Footer'
import Header from 'components/Header'
import ItemsCard from 'components/ItemsCard'
import TagCategory from 'components/TagCategory'
import Titles from 'components/Titles'

import useTitle from 'hooks/useTitle'

const EspacosParaEventos: React.FC = () => {
  const setTitle = useTitle()
  const { isLoading, spaces, spaceCategory } = useSpaces()

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
        <div className="d-flex flex-wrap pt-2 pb-4">
          {!isLoading &&
            Array.isArray(spaceCategory) &&
            spaceCategory.map((category) => (
              <div key={category.id}>
                <TagCategory category={category} />
              </div>
            ))}
        </div>
        <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 pb-5">
          {!isLoading &&
            Array.isArray(spaces) &&
            spaces.map((item) => (
              <Col key={item.id} className="d-flex">
                <ItemsCard item={item} endPoint="espacos" />
              </Col>
            ))}
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export default memo(EspacosParaEventos)
