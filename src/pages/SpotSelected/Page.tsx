import { memo, useEffect } from 'react'

import AppleStore from 'Assets/AppleStore.png'
import GooglePlay from 'Assets/GooglePlay.png'
import { Col, Container, Row, Spinner } from 'react-bootstrap'
import { AiOutlineCheckCircle, AiOutlineMail } from 'react-icons/ai'
import { BsFacebook, BsTelephone, BsWhatsapp } from 'react-icons/bs'
import { FaRegMoneyBillAlt } from 'react-icons/fa'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { TbWorld } from 'react-icons/tb'
import SVG from 'react-inlinesvg'
import { Link, useParams } from 'react-router-dom'

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
                <div className="fs-5 pt-4">
                  <p>{spot?.descricao_t}</p>
                </div>
                <div>
                  <div className="border-bottom border-secondary mb-3 pt-3">
                    <h4>Sobre</h4>
                  </div>
                  <div>
                    {spot?.addresses != null && (
                      <div className="pt-1 pb-3">
                        {spot.addresses.map((adress) => (
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
                    {spot?.phones != null && (
                      <>
                        {spot?.phones.map((phone) => (
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
                    {spot?.email != null && (
                      <div className="d-flex">
                        <div>
                          <AiOutlineMail size={22} color="#6ebd00" />
                        </div>
                        <span className="px-1">{spot?.email}</span>
                      </div>
                    )}
                    {spot?.site != null && (
                      <div className="d-flex mt-3">
                        <div>
                          <TbWorld size={22} color="#6ebd00" />
                        </div>
                        <Link
                          to={`https://${spot.site}`}
                          target="_blank"
                          className=" text-decoration-none px-1 custom-link"
                        >
                          {spot?.site}
                        </Link>
                      </div>
                    )}
                    {spot?.redes != null && (
                      // eslint-disable-next-line react/jsx-no-useless-fragment
                      <>
                        {spot?.redes.map((rede) => (
                          <div className="d-flex mt-3" key={rede.url}>
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
                    {spot && spot.dicas_t && spot.dicas_t.length > 0 && (
                      <>
                        <div className="border-bottom border-secondary mb-3 pt-4">
                          <h4>Dicas</h4>
                        </div>
                        <div className="fs-5 pt-1">
                          <p>{spot?.dicas_t}</p>
                        </div>
                      </>
                    )}
                    {spot?.gratuito === 1 && (
                      <div className="pb-4">
                        <div className="border-bottom border-secondary mb-3 pt-3">
                          <h4 className="pt-3">Valor da entrada</h4>
                        </div>
                        <div className="d-flex">
                          <div className="px-3">
                            <FaRegMoneyBillAlt size={30} color="#6ebd00" />
                          </div>
                          <p>{spot?.gratuito === 1 ? 'Gratuita' : ''}</p>
                        </div>
                      </div>
                    )}
                    {spot &&
                      spot?.estruturas &&
                      spot?.estruturas.length > 0 && (
                        <>
                          <div className="border-bottom border-secondary mb-3 pt-3">
                            <h4>Estruturas</h4>
                          </div>
                          <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3">
                            {spot.estruturas.map((structure) => (
                              <Col
                                key={structure?.label}
                                className="d-flex px-3 pb-3"
                              >
                                <SVG src={structure.icone} fill="#6ebd00" />
                                <p className="px-2">{structure.label}</p>
                              </Col>
                            ))}
                          </Row>
                        </>
                      )}
                    {spot &&
                      spot?.formas_pagamento &&
                      spot?.formas_pagamento.length > 0 && (
                        <>
                          <div className="border-bottom border-secondary mb-3 pt-3">
                            <h4>Formas de Pagamento</h4>
                          </div>
                          <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3">
                            {spot.formas_pagamento.map((pay) => (
                              <Col key={pay.icone} className="d-flex px-3 pb-3">
                                <AiOutlineCheckCircle
                                  size={22}
                                  color="#6ebd00"
                                />
                                <p className="px-2">{pay.label}</p>
                              </Col>
                            ))}
                          </Row>
                        </>
                      )}
                    {spot && spot?.viajantes && spot.viajantes.length > 0 && (
                      <>
                        <div className="border-bottom border-secondary mb-3 pt-3">
                          <h4>Tipos de Viajantes</h4>
                        </div>
                        <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3">
                          {spot?.viajantes.map((viajante) => (
                            <Col
                              key={viajante.label}
                              className="d-flex px-3 pb-3"
                            >
                              <AiOutlineCheckCircle size={22} color="#6ebd00" />
                              <p className="px-2">{viajante.label}</p>
                            </Col>
                          ))}
                        </Row>
                      </>
                    )}
                    {spot &&
                      spot?.restricoes &&
                      spot?.restricoes.length > 0 && (
                        <>
                          <div className="border-bottom border-secondary mb-3 pt-3">
                            <h4>Restrições</h4>
                          </div>
                          <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3">
                            {spot.restricoes.map((structure) => (
                              <Col
                                key={structure?.label}
                                className="d-flex px-3 pb-3"
                              >
                                <SVG src={structure.icone} fill="#6ebd00" />
                                <p className="px-2">{structure.label}</p>
                              </Col>
                            ))}
                          </Row>
                        </>
                      )}
                  </div>
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

export default memo(Spot)
