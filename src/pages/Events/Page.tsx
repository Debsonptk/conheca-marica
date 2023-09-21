import { memo, useEffect } from 'react'

import { Col, Container, Row, Spinner } from 'react-bootstrap'

import { useEvent } from 'context/EventContext'

import Footer from 'components/Footer'
import Header from 'components/Header'
import ItemsCard from 'components/ItemsCard'
import TagCategory from 'components/TagCategory'
import Titles from 'components/Titles'

import useTitle from 'hooks/useTitle'

import { ContainerBg } from './styles'

const Eventos: React.FC = () => {
  const { events, isLoading, eventCategory } = useEvent()
  const setTitle = useTitle()

  useEffect(() => {
    setTitle('Eventos | Conheça Maricá')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Header />
      <ContainerBg>
        <Container>
          <Titles title="Eventos" />
          {isLoading && (
            <div className="d-flex justify-content-center">
              <Spinner animation="border" variant="secondary" />
            </div>
          )}
          <div className="d-flex flex-wrap pt-2 pb-4">
            {!isLoading &&
              Array.isArray(eventCategory) &&
              eventCategory.map((category) => (
                <div key={category.id}>
                  <TagCategory category={category} />
                </div>
              ))}
          </div>
          <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 pb-5">
            {!isLoading &&
              Array.isArray(events) &&
              events.map((item) => (
                <Col key={item.id} className="d-flex">
                  <ItemsCard item={item} endPoint="eventos" />
                </Col>
              ))}
          </Row>
        </Container>
      </ContainerBg>
      <Footer />
    </>
  )
}

export default memo(Eventos)
