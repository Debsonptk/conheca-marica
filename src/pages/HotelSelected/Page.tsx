import { memo, useEffect } from 'react'

import AppleStore from 'Assets/AppleStore.png'
import GooglePlay from 'Assets/GooglePlay.png'
import { Col, Container, Row, Spinner } from 'react-bootstrap'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFacebook, BsTelephone, BsWhatsapp } from 'react-icons/bs'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { IoMdKey } from 'react-icons/io'
import { TbWorld } from 'react-icons/tb'
import { Link, useParams } from 'react-router-dom'

import { useHotels } from 'context/HotelContext'

import Footer from 'components/Footer'
import Header from 'components/Header'
import TagCategory from 'components/TagCategory'
import Titles from 'components/Titles'

import useTitle from 'hooks/useTitle'

import { ContainerBg } from './styles'

const HoteisEPousadas: React.FC = () => {
  const setTitle = useTitle()
  const { isLoading, hotel, fetchHotel } = useHotels()
  const { id } = useParams()

  useEffect(() => {
    if (hotel?.nome) setTitle(`${hotel?.nome} | Conheça Maricá`)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hotel?.nome])

  useEffect(() => {
    if (id) fetchHotel(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  return (
    <>
      <Header />
      <ContainerBg>
        {isLoading && (
          <div className="d-flex justify-content-center pb-4">
            <Spinner animation="border" variant="secondary" />
          </div>
        )}
        <Container>
          <Row className="row-cols-1 row-cols-lg-2">
            <Col>
              <div className="p-3">
                <span className="px-4">Hotéis e Pousadas</span>
                <Titles title={hotel?.nome} />
              </div>
              <div className="d-flex flex-wrap pb-4">
                {!isLoading &&
                  Array.isArray(hotel?.categorias) &&
                  hotel?.categorias.map((category) => (
                    <div key={category.id}>
                      <TagCategory category={category} />
                    </div>
                  ))}
                <div className="fs-5 pt-4">
                  <p>{hotel?.descricao_t}</p>
                </div>
                <div>
                  {Array.isArray(hotel?.addresses) && (
                    <>
                      <div className="border-bottom border-secondary mb-3 pt-3">
                        <h4 className="pt-3">Sobre</h4>
                      </div>
                      <div className="pb-2">
                        {hotel?.addresses.map((i) => (
                          <div
                            className="fs-3rem d-flex align-items-center mt-2"
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
                    </>
                  )}
                  {hotel?.phones != null && (
                    <>
                      {hotel.phones.map((phone) => (
                        <div key={phone.id} className="d-flex">
                          <div className="px-3">
                            {phone.whatsapp === true ? (
                              <BsWhatsapp
                                size={22}
                                color="#6ebd00"
                                className="me-2"
                              />
                            ) : (
                              <BsTelephone
                                size={22}
                                color="#6ebd00"
                                className="me-2"
                              />
                            )}
                          </div>
                          <div
                            className="d-flex flex-column pb-3"
                            key={phone.id}
                          >
                            <p className="d-flex text-start me-3 ">
                              {phone.nome} &nbsp;{phone.number}
                            </p>
                          </div>
                        </div>
                      ))}{' '}
                    </>
                  )}
                  {hotel?.email != null && (
                    <div className="d-flex px-3">
                      <AiOutlineMail
                        size={22}
                        color="#6ebd00"
                        className="me-2"
                      />
                      <span className="px-3">{hotel.email}</span>
                    </div>
                  )}
                  {hotel?.site != null && (
                    <div className="d-flex px-3 pt-2">
                      <TbWorld size={22} color="#6ebd00" className="me-2" />
                      <Link
                        to={`https://${hotel.site}`}
                        target="_blank"
                        className="px-3 custom-link"
                      >
                        {hotel.site}
                      </Link>
                    </div>
                  )}
                  {hotel?.redes != null && (
                    <>
                      {hotel.redes.map((rede) => (
                        <div key={rede.nome}>
                          <div className="d-flex px-3 pt-2">
                            <BsFacebook
                              size={22}
                              color="#6ebd00"
                              className="me-2"
                            />
                            <Link
                              to={`https://www.facebook.com/${rede.user}`}
                              target="_blank"
                              className="px-3 custom-link"
                            >
                              {rede.user}
                            </Link>
                          </div>
                        </div>
                      ))}
                    </>
                  )}
                  {hotel?.quartos && (
                    <>
                      <div className="border-bottom border-secondary mb-3 pt-3">
                        <h4 className="pt-3">Comodidades</h4>
                      </div>
                      <div>
                        <div className="d-flex px-3 pt-2">
                          <IoMdKey size={28} className="me-2" color="#6ebd00" />
                        </div>
                      </div>
                    </>
                  )}
                </div>
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

export default memo(HoteisEPousadas)
