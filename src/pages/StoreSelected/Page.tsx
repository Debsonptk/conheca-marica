import { memo, useEffect } from 'react'

import AppleStore from 'Assets/AppleStore.png'
import GooglePlay from 'Assets/GooglePlay.png'
import { Col, Container, Row, Spinner } from 'react-bootstrap'
import { AiOutlineCheckCircle, AiOutlineMail } from 'react-icons/ai'
import { BsFacebook, BsTelephone, BsWhatsapp } from 'react-icons/bs'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { TbWorld } from 'react-icons/tb'
import SVG from 'react-inlinesvg'
import { Link, useParams } from 'react-router-dom'

import { useStores } from 'context/StoreContext'

import Footer from 'components/Footer'
import Header from 'components/Header'
import TagCategory from 'components/TagCategory'
import Titles from 'components/Titles'

import useTitle from 'hooks/useTitle'

import { ContainerBg, ImageDiv } from './styles'

const ComercioLocal: React.FC = () => {
  const setTitle = useTitle()
  const { isLoading, store, fetchStore } = useStores()
  const { id } = useParams()

  useEffect(() => {
    if (store?.nome) setTitle(`${store?.nome} | Conheça Maricá`)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [store?.nome])

  useEffect(() => {
    if (id) fetchStore(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  return (
    <>
      <Header />
      {store && store?.images && store?.images.length <= 4 && (
        <div className="d-flex justify-content-between">
          {store?.images.map((banner) => (
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
            <div className="d-flex justify-content-center">
              <Spinner animation="border" variant="secondary" />
            </div>
          )}
          <Row className="row-cols-1 row-cols-lg-2">
            <Col>
              <div className="p-3">
                <span className="px-4">Comércio Local</span>
                <Titles title={store?.nome} />
              </div>
              <div className="d-flex flex-wrap pb-4">
                {!isLoading &&
                  Array.isArray(store?.categorias) &&
                  store?.categorias.map((category) => (
                    <div key={category.id}>
                      <TagCategory category={category} />
                    </div>
                  ))}
                <div className="fs-5 pt-4">
                  <p>{store?.descricao_t}</p>
                </div>
                <div>
                  <div className="border-bottom border-secondary mb-3 pt-3">
                    <h4>Sobre</h4>
                  </div>
                  <div>
                    {store?.addresses != null && (
                      <div className="pt-1 pb-3">
                        {store.addresses.map((adress) => (
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
                    {store?.phones != null && (
                      <>
                        {store?.phones.map((phone) => (
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
                    {store?.email != null && (
                      <div className="d-flex">
                        <div>
                          <AiOutlineMail size={22} color="#6ebd00" />
                        </div>
                        <span className="px-1">{store?.email}</span>
                      </div>
                    )}
                    {store?.site != null && (
                      <div className="d-flex mt-3">
                        <div>
                          <TbWorld size={22} color="#6ebd00" />
                        </div>
                        <Link
                          to={`https://${store.site}`}
                          target="_blank"
                          className=" text-decoration-none px-1 custom-link"
                        >
                          {store?.site}
                        </Link>
                      </div>
                    )}
                    {store?.redes != null && (
                      // eslint-disable-next-line react/jsx-no-useless-fragment
                      <>
                        {store?.redes.map((rede) => (
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
                    {store?.estruturas && (
                      <>
                        <div className="border-bottom border-secondary mb-3 pt-3">
                          <h4>Estruturas</h4>
                        </div>
                        <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3">
                          {store.estruturas.map((structure) => (
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
                    {store?.formas_pagamento && (
                      <>
                        <div className="border-bottom border-secondary mb-3 pt-3">
                          <h4>Formas de Pagamento</h4>
                        </div>
                        <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3">
                          {store.formas_pagamento.map((pay) => (
                            <Col key={pay.icone} className="d-flex px-3 pb-3">
                              <AiOutlineCheckCircle size={22} color="#6ebd00" />
                              <p className="px-2">{pay.label}</p>
                            </Col>
                          ))}
                        </Row>
                      </>
                    )}
                    {store &&
                      store?.restricoes &&
                      store?.restricoes.length > 0 && (
                        <>
                          <div className="border-bottom border-secondary mb-3 pt-3">
                            <h4>Restrições</h4>
                          </div>
                          <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3">
                            {store.restricoes.map((structure) => (
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

export default memo(ComercioLocal)
