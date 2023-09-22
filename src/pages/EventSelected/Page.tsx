import { memo, useEffect } from 'react'

import { Col, Container, Row, Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

import { useEvent } from 'context/EventContext'

import Footer from 'components/Footer'
import Header from 'components/Header'
import TagCategory from 'components/TagCategory'
import Titles from 'components/Titles'

import useTitle from 'hooks/useTitle'

import { ContainerBg } from './styles'

const EventoSelecionado: React.FC = () => {
  const setTitle = useTitle()
  const { isLoading, event, fetchEvent } = useEvent()
  const { id } = useParams()

  useEffect(() => {
    setTitle(`${event?.nome}`)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (id) fetchEvent(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  return (
    <>
      <Header />
      <ContainerBg>
        {isLoading && (
          <div className="d-flex justify-content-center pb-4 pt-4">
            <Spinner animation="border" variant="secondary" />
          </div>
        )}
        <Container>
          <Row>
            <Col>
              <div className="p-3">
                <span className="px-4">Eventos</span>
                <Titles title={event?.nome} />
              </div>
              <div className="d-flex flex-wrap">
                {!isLoading &&
                  Array.isArray(event?.categorias) &&
                  event?.categorias.map((category) => (
                    <div>
                      <TagCategory category={category} />
                    </div>
                  ))}
              </div>
              <div className="fs-5 pt-4">
                <p>{event?.descricao_t}</p>
              </div>
              <div>
                {Array.isArray(event?.addresses) && (
                  <div>
                    <h4 className="pt-3">Sobre</h4>
                  </div>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </ContainerBg>
      <Footer />
    </>
  )
}

export default memo(EventoSelecionado)
