import { memo, useEffect } from 'react'

import { Col, Container, Row, Spinner } from 'react-bootstrap'

import { useStores } from 'context/StoreContext'

import Footer from 'components/Footer'
import Header from 'components/Header'
import ItemsCard from 'components/ItemsCard'
import TagCategory from 'components/TagCategory'
import Titles from 'components/Titles'

import useTitle from 'hooks/useTitle'

const ComercioLocal: React.FC = () => {
  const setTitle = useTitle()
  const { isLoading, stores, categoryStore } = useStores()

  useEffect(() => {
    setTitle('Comércio Local | Conheça Maricá')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Header />
      <Container>
        <Titles title="Comércio Local" />
        {isLoading && (
          <div className="d-flex justify-content-center">
            <Spinner animation="border" variant="secondary" />
          </div>
        )}
        <div className="d-flex flex-wrap pt-2 pb-4">
          {!isLoading &&
            Array.isArray(categoryStore) &&
            categoryStore.map((category) => (
              <TagCategory category={category} />
            ))}
        </div>
        <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 pb-5">
          {!isLoading &&
            Array.isArray(stores) &&
            stores.map((item) => (
              <Col key={item.id} className="d-flex">
                <ItemsCard item={item} endPoint="comercios" />
              </Col>
            ))}
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export default memo(ComercioLocal)
