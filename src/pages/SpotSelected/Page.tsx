import { memo, useEffect } from 'react'

import { Col, Container, Row, Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

import { useSpots } from 'context/SpotContext'

import Footer from 'components/Footer'
import Header from 'components/Header'
import TagCategory from 'components/TagCategory'
import Titles from 'components/Titles'

import useTitle from 'hooks/useTitle'

import { ContainerBg, ImageDiv } from './styles'

const Spot: React.FC = () => {
  const setTitle = useTitle()
  const { isLoading, spot, fetchSpot } = useSpots()
  const { id } = useParams()

  useEffect(() => {
    if (spot?.nome) setTitle(`${spot?.nome} | Conheça Maricá`)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [spot?.nome])

  useEffect(() => {
    if (id) fetchSpot(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  return (
    <>
      <Header />
      {spot && spot.images && spot?.images.length <= 4 && (
        <div className="d-flex justify-content-between">
          {spot?.images.map((banner) => (
            <ImageDiv
              key={banner.id}
              capa={banner.src}
              className="d-block w-100"
            />
          ))}
        </div>
      )}
      <ContainerBg>
        <Container>
          {isLoading && (
            <div className="d-flex justify-content-center pb-4">
              <Spinner animation="border" variant="secondary" />
            </div>
          )}
          <Row className="row-cols-1 row-cols-lg-2">
            <Col>
              <div className="p-3">
                <span className="px-4">Pontos Turísticos</span>
                <Titles title={spot?.nome} />
              </div>
              <div className="d-flex flex-wrap">
                {!isLoading &&
                  Array.isArray(spot?.categorias) &&
                  spot?.categorias.map((category) => (
                    <div key={category.id}>
                      <TagCategory category={category} />
                    </div>
                  ))}
              </div>
            </Col>
          </Row>
        </Container>
      </ContainerBg>

      <Footer />
    </>
  )
}

export default memo(Spot)
