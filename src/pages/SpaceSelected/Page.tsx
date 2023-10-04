import { memo, useEffect } from 'react'

import AppleStore from 'Assets/AppleStore.png'
import GooglePlay from 'Assets/GooglePlay.png'
import { Col, Container, Row, Spinner } from 'react-bootstrap'
import {
  AiOutlineCheckCircle,
  AiOutlineClockCircle,
  AiOutlineMail,
} from 'react-icons/ai'
import {
  BsFacebook,
  BsHouseDoorFill,
  BsTelephone,
  BsWhatsapp,
} from 'react-icons/bs'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { TbWorld } from 'react-icons/tb'
import SVG from 'react-inlinesvg'
import { Link, useParams } from 'react-router-dom'

import { useSpaces } from 'context/SpaceContext'

import BannerCarousel from 'components/BannerCarousel'
import Footer from 'components/Footer'
import Header from 'components/Header'
import TagCategory from 'components/TagCategory'
import Titles from 'components/Titles'

import useTitle from 'hooks/useTitle'

import { ContainerBg, IconDiv } from './styles'

const EspacosParaEventos: React.FC = () => {
  const setTitle = useTitle()
  const { isLoading, space, fetchSpace } = useSpaces()
  const { id } = useParams()

  useEffect(() => {
    if (space?.nome) setTitle(`${space?.nome} | Conheça Maricá`)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [space?.nome])

  useEffect(() => {
    if (id) fetchSpace(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  return (
    <>
      <Header />
      {!isLoading && space && <BannerCarousel itemCategory={space} />}
      <ContainerBg>
        <Container>
          {isLoading && (
            <div className="d-flex justify-content-center">
              <Spinner animation="border" variant="secondary" />
            </div>
          )}
          <Row className="row-cols-1 row-cols-lg-2">
            <Col>
              <div className="p-3">
                <span className="px-4">Espaços para Eventos</span>
                <Titles title={space?.nome} />
              </div>
              <div className="d-flex flex-wrap">
                {!isLoading &&
                  Array.isArray(space?.categorias) &&
                  space?.categorias.map((category) => (
                    <div key={category.id}>
                      <TagCategory category={category} />
                    </div>
                  ))}
                <div className="fs-5 pt-2 pb-4">
                  <p>{space?.descricao_t}</p>
                </div>
                <div>
                  <div className="border-bottom border-secondary mb-3 pt-3">
                    <h4>Sobre</h4>
                  </div>
                  {space?.addresses != null && (
                    <div className="pt-1 pb-3">
                      {space?.addresses.map((adress) => (
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
                  {space?.phones != null && (
                    <>
                      {space?.phones.map((phone) => (
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
                  {space?.email != null && (
                    <div className="d-flex">
                      <div>
                        <AiOutlineMail size={22} color="#6ebd00" />
                      </div>
                      <span className="px-1">{space?.email}</span>
                    </div>
                  )}
                  {space?.site != null && (
                    <div className="d-flex mt-3">
                      <div>
                        <TbWorld size={22} color="#6ebd00" />
                      </div>
                      <Link
                        to={`https://${space.site}`}
                        target="_blank"
                        className=" text-decoration-none px-1 custom-link"
                      >
                        {space?.site}
                      </Link>
                    </div>
                  )}
                  {space?.redes != null && (
                    // eslint-disable-next-line react/jsx-no-useless-fragment
                    <>
                      {space?.redes.map((rede) => (
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
                  {space &&
                    space.horario_funcionamento &&
                    space?.horario_funcionamento.length > 0 && (
                      <div className="d-flex mt-3 pb-3">
                        <div className="px-1">
                          <AiOutlineClockCircle size={22} color="#6ebd00" />
                        </div>
                        <Row>
                          <Col className="col-4">
                            {space?.horario_funcionamento.map((horario) => (
                              <p className="fw-bold">{horario.label}</p>
                            ))}
                          </Col>
                          <Col className="col-8">
                            {space?.horario_funcionamento.map((horario) => (
                              <p key={space.id}>
                                {horario.horario.abre} às{' '}
                                {horario.horario.fecha}
                              </p>
                            ))}
                          </Col>
                        </Row>
                      </div>
                    )}
                  {space?.espacos && (
                    <>
                      <div className="border-bottom border-secondary mb-3 pt-3">
                        <h4>Espaços</h4>
                      </div>
                      <div className="pt-3 mb-3">
                        {space.espacos.map((espaco) => (
                          <div className="d-flex me-3 pb-3" key={space.id}>
                            <IconDiv>
                              <BsHouseDoorFill size={22} className="me-2" />
                            </IconDiv>
                            <div>
                              <h6 className="fw-bold mb-1">{espaco.nome}</h6>
                              {espaco.descricao && (
                                <p className="fst-italic mb-1 text-muted pb-2">
                                  {espaco.descricao}
                                </p>
                              )}
                              {espaco.area && (
                                <p className="mb-1 text-muted">
                                  Área: {espaco.area} m²
                                </p>
                              )}
                              {espaco.pe_direito && (
                                <p className="mb-1 text-muted">
                                  Pé direito: {espaco.pe_direito}
                                </p>
                              )}
                              {espaco.medidas && (
                                <p className="mb-1 text-muted">
                                  Medidas: {espaco.medidas}
                                </p>
                              )}
                              {espaco.capacidade && (
                                <p className="mb-3 text-muted">
                                  Capacidade: {espaco.capacidade} pessoas
                                </p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                  {space?.estruturas && (
                    <>
                      <div className="border-bottom border-secondary mb-3">
                        <h4>Estruturas</h4>
                      </div>
                      <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3">
                        {space.estruturas.map((structure) => (
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
                  {space?.formas_pagamento && (
                    <>
                      <div className="border-bottom border-secondary mb-3 pt-3">
                        <h4>Formas de Pagamento</h4>
                      </div>
                      <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 pb-4">
                        {space.formas_pagamento.map((pay) => (
                          <Col key={pay.icone} className="d-flex px-3 pb-3">
                            <AiOutlineCheckCircle size={22} color="#6ebd00" />
                            <p className="px-2">{pay.label}</p>
                          </Col>
                        ))}
                      </Row>
                    </>
                  )}
                  {space &&
                    space?.restricoes &&
                    space?.restricoes.length > 0 && (
                      <>
                        <div className="border-bottom border-secondary mb-3 pt-3">
                          <h4>Restrições</h4>
                        </div>
                        <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3">
                          {space.restricoes.map((i) => (
                            <Col key={i?.label} className="d-flex px-3 pb-3">
                              <SVG src={i.icone} fill="#6ebd00" />
                              <p className="px-2">{i.label}</p>
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

export default memo(EspacosParaEventos)
