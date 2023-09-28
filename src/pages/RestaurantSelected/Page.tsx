import { memo, useEffect } from 'react'

import AppleStore from 'Assets/AppleStore.png'
import GooglePlay from 'Assets/GooglePlay.png'
import { Col, Container, Row, Spinner } from 'react-bootstrap'
import {
  AiOutlineCheckCircle,
  AiOutlineClockCircle,
  AiOutlineMail,
} from 'react-icons/ai'
import { BsFacebook, BsTelephone, BsWhatsapp } from 'react-icons/bs'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { MdAttachMoney } from 'react-icons/md'
import { TbWorld } from 'react-icons/tb'
import SVG from 'react-inlinesvg'
import { Link, useParams } from 'react-router-dom'

import { useRestaurants } from 'context/RestaurantContext'

import Footer from 'components/Footer'
import Header from 'components/Header'
import TagCategory from 'components/TagCategory'
import Titles from 'components/Titles'

import useTitle from 'hooks/useTitle'

import { ContainerBg, IconDiv, ImageDiv } from './styles'

const BaresERestaurantes: React.FC = () => {
  const setTitle = useTitle()
  const { isLoading, restaurant, fetchRestaurant } = useRestaurants()
  const { id } = useParams()

  const priceRange = (range: number): string[] => {
    const colorIconArray = []
    for (let i = 0; i < range; i += 1) {
      colorIconArray.push('#6ebd00')
    }
    for (let i = 0; i < 5 - range; i += 1) {
      colorIconArray.push('#cccccc')
    }
    return colorIconArray
  }

  useEffect(() => {
    if (restaurant?.nome) setTitle(`${restaurant?.nome} | Conheça Maricá`)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [restaurant?.nome])

  useEffect(() => {
    if (id) fetchRestaurant(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  return (
    <>
      <Header />
      {restaurant && restaurant.images && restaurant?.images.length <= 4 && (
        <div className="d-flex justify-content-between">
          {restaurant?.images.map((banner) => (
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
                <span className="px-4">Bares e Restaurantes</span>
                <Titles title={restaurant?.nome} />
              </div>
              <div className="d-flex flex-wrap">
                {!isLoading &&
                  Array.isArray(restaurant?.categorias) &&
                  restaurant?.categorias.map((category) => (
                    <div key={category.id}>
                      <TagCategory category={category} />
                    </div>
                  ))}
                <div className="fs-5 pt-2">
                  <p>{restaurant?.descricao_t}</p>
                </div>
                <div>
                  <div className="border-bottom border-secondary mb-3 pt-3">
                    <h4>Sobre</h4>
                  </div>
                  {restaurant?.addresses != null && (
                    <div className="pt-1 pb-3">
                      {restaurant?.addresses.map((adress) => (
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
                  {restaurant?.phones != null && (
                    <>
                      {restaurant?.phones.map((phone) => (
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
                  {restaurant?.email != null && (
                    <div className="d-flex">
                      <div>
                        <AiOutlineMail size={22} color="#6ebd00" />
                      </div>
                      <span className="px-1">{restaurant?.email}</span>
                    </div>
                  )}
                  {restaurant?.site != null && (
                    <div className="d-flex mt-3">
                      <div>
                        <TbWorld size={22} color="#6ebd00" />
                      </div>
                      <Link
                        to={`https://${restaurant.site}`}
                        target="_blank"
                        className=" text-decoration-none px-1 custom-link"
                      >
                        {restaurant?.site}
                      </Link>
                    </div>
                  )}
                  {restaurant?.redes != null && (
                    // eslint-disable-next-line react/jsx-no-useless-fragment
                    <>
                      {restaurant?.redes.map((rede) => (
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
                  {restaurant &&
                    restaurant.horario_funcionamento &&
                    restaurant?.horario_funcionamento.length > 0 && (
                      <div className="d-flex mt-3 pb-3">
                        <div className="px-1">
                          <AiOutlineClockCircle size={22} color="#6ebd00" />
                        </div>
                        <Row>
                          <Col className="col-4">
                            {restaurant?.horario_funcionamento.map(
                              (horario) => (
                                <p className="fw-bold">{horario.label}</p>
                              ),
                            )}
                          </Col>
                          <Col className="col-8">
                            {restaurant?.horario_funcionamento.map(
                              (horario) => (
                                <p>
                                  {horario.horario.abre} às{' '}
                                  {horario.horario.fecha}
                                </p>
                              ),
                            )}
                          </Col>
                        </Row>
                      </div>
                    )}
                  <div className="pb-3">
                    <div className="border-bottom border-secondary mb-3 pt-3">
                      <h4>Faixa de preço</h4>
                    </div>
                    <IconDiv>
                      {restaurant?.faixa_preco &&
                        priceRange(restaurant?.faixa_preco)?.map(
                          (_priceRange) => (
                            // eslint-disable-next-line react/no-array-index-key
                            <MdAttachMoney
                              size={22}
                              className="me-2"
                              key={id}
                              color={_priceRange}
                            />
                          ),
                        )}
                    </IconDiv>
                  </div>
                  {restaurant?.refeicoes && (
                    <>
                      <div className="border-bottom border-secondary mb-3 pt-3">
                        <h4>Refeiçoes</h4>
                      </div>
                      <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3">
                        {restaurant?.refeicoes.map((refeicao) => (
                          <Col key={refeicao.label} className="d-flex">
                            <IconDiv>
                              <AiOutlineCheckCircle size={22} />
                            </IconDiv>
                            <p>{refeicao.label}</p>
                          </Col>
                        ))}
                      </Row>
                    </>
                  )}
                  {restaurant?.cozinhas && (
                    <>
                      <div className="border-bottom border-secondary mb-3 pt-4">
                        <h4>Cozinha</h4>
                      </div>
                      <Row className="pt-2 mb-5">
                        {restaurant?.cozinhas.map((cozinha) => (
                          <Col
                            className="d-flex me-3 col-12 col-md-3 pb-2"
                            key={cozinha.label}
                          >
                            <IconDiv>
                              <AiOutlineCheckCircle size={22} />
                            </IconDiv>
                            <p>{cozinha.label}</p>
                          </Col>
                        ))}
                      </Row>
                    </>
                  )}
                  {restaurant?.estruturas && (
                    <>
                      <div className="border-bottom border-secondary mb-3">
                        <h4>Estruturas</h4>
                      </div>
                      <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3">
                        {restaurant.estruturas.map((structure) => (
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
                  {restaurant?.formas_pagamento && (
                    <>
                      <div className="border-bottom border-secondary mb-3 pt-3">
                        <h4>Formas de Pagamento</h4>
                      </div>
                      <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 pb-4">
                        {restaurant.formas_pagamento.map((pay) => (
                          <Col key={pay.icone} className="d-flex px-3 pb-3">
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

export default memo(BaresERestaurantes)
