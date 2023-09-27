import { memo, useEffect } from 'react'

import AppleStore from 'Assets/AppleStore.png'
import GooglePlay from 'Assets/GooglePlay.png'
import { Col, Container, Row, Spinner } from 'react-bootstrap'
import { AiOutlineCheckCircle, AiOutlineMail } from 'react-icons/ai'
import { BiSolidBowlHot } from 'react-icons/bi'
import { BsFacebook, BsTelephone, BsWhatsapp } from 'react-icons/bs'
import { GiKnifeFork } from 'react-icons/gi'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { IoMdKey } from 'react-icons/io'
import { MdHotel } from 'react-icons/md'
import { RiCupFill } from 'react-icons/ri'
import { TbWorld } from 'react-icons/tb'
import SVG from 'react-inlinesvg'
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
                  <div className="border-bottom border-secondary mb-3 pt-3">
                    <h4>Sobre</h4>
                  </div>
                  <div>
                    {hotel?.addresses != null && (
                      <div className="pt-1 pb-3">
                        {hotel.addresses.map((adress) => (
                          <div className="d-flex" key={adress.id}>
                            <div className="">
                              <HiOutlineLocationMarker
                                size={25}
                                color="#6ebd00"
                              />
                              <span className="px-1">{adress.label}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    {hotel?.phones != null && (
                      <>
                        {hotel?.phones.map((phone) => (
                          <div className="d-flex" key={phone.id}>
                            <div className="px-1">
                              {phone.whatsapp === true ? (
                                <div className="pb-3">
                                  <BsWhatsapp size={22} color="#6ebd00" />
                                </div>
                              ) : (
                                <div className="pb-3">
                                  <BsTelephone size={22} color="#6ebd00" />
                                </div>
                              )}
                            </div>
                            <div className="d-flex flex-column">
                              <p className="d-flex text-start me-3 pb-3">
                                {phone.nome} &nbsp;{phone.number}
                              </p>
                            </div>
                          </div>
                        ))}{' '}
                      </>
                    )}
                    {hotel?.email != null && (
                      <div className="d-flex">
                        <div>
                          <AiOutlineMail size={22} color="#6ebd00" />
                        </div>
                        <span className="px-1">{hotel?.email}</span>
                      </div>
                    )}
                    {hotel?.site != null && (
                      <div className="d-flex mt-3">
                        <div>
                          <TbWorld size={22} color="#6ebd00" />
                        </div>
                        <Link
                          to={`https://${hotel.site}`}
                          target="_blank"
                          className=" text-decoration-none px-1 custom-link"
                        >
                          {hotel?.site}
                        </Link>
                      </div>
                    )}
                    {hotel?.redes != null && (
                      // eslint-disable-next-line react/jsx-no-useless-fragment
                      <>
                        {hotel?.redes.map((rede) => (
                          <div className="d-flex mt-3" key={rede.nome}>
                            <div>
                              <BsFacebook size={22} color="#6ebd00" />
                            </div>
                            <Link
                              to={`https://www.facebook.com/${rede.user}`}
                              target="_blank"
                              className="text-decoration-none custom-link"
                            >
                              <div className="px-1">{rede.user}</div>
                            </Link>
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                  <div className="border-bottom border-secondary mb-3 pt-3">
                    <h4>Comodidades</h4>
                  </div>
                  <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3">
                    <Col className="pb-3">
                      <div>
                        {hotel?.quartos && (
                          <div className="d-flex">
                            <IoMdKey size={28} color="#6ebd00" />
                            <span className="px-1">
                              {hotel?.quartos} quartos
                            </span>
                          </div>
                        )}
                      </div>
                    </Col>
                    <Col className="pb-3">
                      <div>
                        {hotel?.leitos && (
                          <div className="d-flex">
                            <MdHotel size={22} color="#6ebd00" />
                            <span className="px-1">{hotel?.leitos} leitos</span>
                          </div>
                        )}
                      </div>
                    </Col>
                    <Col className="pb-3">
                      <div>
                        {hotel?.cafe_manha === true && (
                          <div className="d-flex">
                            <RiCupFill size={22} color="#6ebd00" />
                            <div className="d-flex flex-column">
                              <span className="px-1">Café da manhã</span>
                              <p>Aceita não-hóspedes </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </Col>
                    <Col className="pb-3">
                      {hotel?.almoco === true && (
                        <div className="d-flex">
                          <GiKnifeFork size={22} color="#6ebd00" />
                          <div className="d-flex flex-column">
                            <span className="px-1">Almoço</span>
                            <p>Aceita não-hóspedes </p>
                          </div>
                        </div>
                      )}
                    </Col>
                    <Col className="pb-3">
                      {hotel?.jantar === true && (
                        <div className="d-flex">
                          <BiSolidBowlHot size={22} color="#6ebd00" />
                          <div className="d-flex flex-column">
                            <span className="px-1">Jantar</span>
                            <p>Aceita não-hóspedes </p>
                          </div>
                        </div>
                      )}
                    </Col>
                  </Row>
                  {hotel?.estruturas && (
                    <>
                      <div className="border-bottom border-secondary mb-3 pt-3">
                        <h4>Estruturas</h4>
                      </div>
                      <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3">
                        {hotel.estruturas.map((structure) => (
                          <Col
                            key={structure.label}
                            className="d-flex px-3 pb-3"
                          >
                            <SVG src={structure.icone} fill="#6ebd00" />
                            <p className="px-2">{structure.label}</p>
                          </Col>
                        ))}
                      </Row>
                    </>
                  )}
                  {hotel?.formas_pagamento && (
                    <>
                      <div className="border-bottom border-secondary mb-3 pt-3">
                        <h4>Formas de Pagamento</h4>
                      </div>
                      <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3">
                        {hotel.formas_pagamento.map((pay) => (
                          <Col key={pay.label} className="d-flex px-3 pb-3">
                            <AiOutlineCheckCircle size={22} color="#6ebd00" />
                            <p className="px-2">{pay.label}</p>
                          </Col>
                        ))}
                      </Row>
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
