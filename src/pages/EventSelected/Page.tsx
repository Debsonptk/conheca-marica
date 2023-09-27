import { memo, useEffect } from 'react'

import AppleStore from 'Assets/AppleStore.png'
import GooglePlay from 'Assets/GooglePlay.png'
import { getDate, getHours, getYear } from 'date-fns'
import { Col, Container, Row, Spinner } from 'react-bootstrap'
import { FaRegMoneyBillAlt } from 'react-icons/fa'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { Link, useParams } from 'react-router-dom'

import { useEvent } from 'context/EventContext'

import Footer from 'components/Footer'
import Header from 'components/Header'
import TagCategory from 'components/TagCategory'
import Titles from 'components/Titles'

import {
  formatEndDate,
  formatStartDate,
  getMonthAbbreviation,
  getMonthName,
  normalizeMinutes,
} from 'helpers'

import useTitle from 'hooks/useTitle'

import { ContainerBg } from './styles'

const EventoSelecionado: React.FC = () => {
  const setTitle = useTitle()
  const { isLoading, event, fetchEvent } = useEvent()
  const { id } = useParams()

  useEffect(() => {
    setTitle(`${event?.nome} | Conheça Maricá`)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [event?.nome])

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
          <Row className="row-cols-1 row-cols-lg-2">
            <Col>
              <div className="p-3">
                <span className="px-4">Eventos</span>
                <Titles title={event?.nome} />
              </div>
              <div className="d-flex flex-wrap pb-4">
                {!isLoading &&
                  Array.isArray(event?.categorias) &&
                  event?.categorias.map((category) => (
                    <div key={category.id}>
                      <TagCategory category={category} />
                    </div>
                  ))}
              </div>
              {event?.datahora_inicio_f && event.datahora_fim_f && (
                <div className="d-flex">
                  <div className="d-flex flex-column align-items-center me-3">
                    <span style={{ color: '#dc3545' }}>
                      {getMonthAbbreviation(
                        formatStartDate(event.datahora_inicio_f),
                      )}
                    </span>
                    <span>
                      {getDate(
                        new Date(formatStartDate(event.datahora_inicio_f)),
                      )}
                    </span>
                  </div>
                  <div>
                    <div>
                      De:{' '}
                      {`${getDate(
                        new Date(formatStartDate(event.datahora_inicio_f)),
                      )} de ${getMonthName(
                        formatStartDate(event.datahora_inicio_f),
                      )} de ${getYear(
                        new Date(formatStartDate(event.datahora_inicio_f)),
                      )}, às ${getHours(
                        new Date(formatStartDate(event.datahora_inicio_f)),
                      )}:${`${normalizeMinutes(
                        new Date(formatStartDate(event.datahora_inicio_f)),
                      )}`}h`}
                    </div>
                    <div>
                      Até:{' '}
                      {`${getDate(
                        new Date(formatEndDate(event.datahora_fim_f)),
                      )} de ${getMonthName(
                        formatEndDate(event.datahora_fim_f),
                      )} de ${getYear(
                        new Date(formatEndDate(event.datahora_fim_f)),
                      )}, às ${getHours(
                        new Date(formatEndDate(event.datahora_fim_f)),
                      )}:${`${normalizeMinutes(
                        new Date(formatStartDate(event.datahora_inicio_f)),
                      )}`}h`}
                    </div>
                  </div>
                </div>
              )}
              <div className="fs-5 pt-4">
                <p>{event?.descricao_t}</p>
              </div>
              <div>
                {Array.isArray(event?.addresses) && (
                  <>
                    <div className="border-bottom border-secondary mb-3 pt-3">
                      <h4 className="pt-3">Sobre</h4>
                    </div>
                    <div>
                      {event?.addresses.map((i) => (
                        <div
                          className="fs-5 d-flex align-items-center mt-2"
                          key={i.id}
                        >
                          <div className="px-3">
                            <HiOutlineLocationMarker
                              size={30}
                              color="#6ebd00"
                            />
                          </div>
                          {i.label}
                        </div>
                      ))}
                    </div>
                    {event?.gratuito === 1 && (
                      <>
                        <div className="border-bottom border-secondary mb-3 pt-3">
                          <h4 className="pt-3">Valor da entrada</h4>
                        </div>
                        <div className="d-flex">
                          <div className="px-3">
                            <FaRegMoneyBillAlt size={30} color="#6ebd00" />
                          </div>
                          <p>{event?.gratuito === 1 ? 'Gratuita' : ''}</p>
                        </div>
                      </>
                    )}
                  </>
                )}
              </div>
            </Col>
            <Col className="d-flex justify-content-end">
              <div>
                <h5 className="pt-3 pb-2">Conheça nosso app</h5>
                <div className="d-flex pb-3">
                  <Link
                    to="https://play.google.com/store/apps/details?id=com.marica2030.app"
                    target="_blank"
                  >
                    <img
                      src={GooglePlay}
                      alt="GooglePlay"
                      className="img-fluid"
                    />
                  </Link>
                  <Link
                    to="https://apps.apple.com/br/app/maric%C3%A1-oficial/id1493299199"
                    target="_blank"
                  >
                    <img
                      src={AppleStore}
                      alt="GooglePlay"
                      className="img-fluid px-3"
                    />
                  </Link>
                </div>
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
