import { memo, useEffect } from 'react'

import { Carousel, Col, Container, Row } from 'react-bootstrap'
import { FaUmbrellaBeach, FaMotorcycle, FaRoute } from 'react-icons/fa'
import { GiMicrophone, GiFireFlower, GiGreekTemple } from 'react-icons/gi'
import { MdHotel, MdRestaurant, MdStore } from 'react-icons/md'
import { RiCalendar2Fill } from 'react-icons/ri'

import { useBanners } from 'context/BannerContext'

import AppSection from 'components/AppSection'
import Footer from 'components/Footer'
import Header from 'components/Header'
import HomeCard from 'components/HomeCard'

import useTitle from 'hooks/useTitle'

import { ContainerBackground } from './styles'

const Home: React.FC = () => {
  const { banners, isLoading } = useBanners()
  const setTitle = useTitle()

  useEffect(() => {
    setTitle('Conheça Maricá | Guia Turistico')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Header />
      <Carousel>
        {isLoading && <h2>Loading...</h2>}
        {!isLoading &&
          Array.isArray(banners) &&
          banners.map((banner) => (
            <Carousel.Item key={banner.id}>
              <img
                src={banner.image_l}
                alt="Banner"
                className="d-none d-lg-block w-100"
              />
              <img
                src={banner.image_s}
                alt="Banner"
                className="d-block d-lg-none w-100"
              />
            </Carousel.Item>
          ))}
      </Carousel>
      <ContainerBackground>
        <Container>
          <Row className="pt-5 pb-5 g-3 row-cols-2 row-cols-lg-3 justify-content-center">
            <Col>
              <HomeCard
                icon={FaUmbrellaBeach}
                title="Pontos Turísticos"
                description="Conheça nossas praias, lagoas, grutas e outros pontos turísticos"
                link="/pontos-turisticos"
              />
            </Col>
            <Col>
              <HomeCard
                icon={MdHotel}
                title="Hotéis e Pousadas"
                description="Saiba onde se hospedar em Maricá"
                link="/hoteis-e-pousadas"
              />
            </Col>
            <Col>
              <HomeCard
                icon={MdRestaurant}
                title="Bares e Restaurantes"
                description="Aprecie a gastronomia de Maricá"
                link="/bares-e-restaurantes"
              />
            </Col>
            <Col>
              <HomeCard
                icon={FaMotorcycle}
                title="Delivery"
                description="Receba o melhor de Maricá no conforto da sua casa"
                link="/delivery"
              />
            </Col>
            <Col>
              <HomeCard
                icon={MdStore}
                title="Comércio Local"
                description="Veja onde fazer as suas compras"
                link="/comercio-local"
              />
            </Col>
            <Col>
              <HomeCard
                icon={GiMicrophone}
                title="Espaços para Eventos"
                description="Locais para fazer suas festas ou reuniões"
                link="/espacos-para-eventos"
              />
            </Col>
            <Col>
              <HomeCard
                icon={RiCalendar2Fill}
                title="Eventos"
                description="Confira o calendário de eventos da cidade"
                link="/eventos"
              />
            </Col>
            <Col>
              <HomeCard
                icon={FaRoute}
                title="Roteiros turísticos"
                description="Conheça diversas trilhas ecológicas e de aventura, com variados níveis de dificuldade."
                link="https://contato.site/5d9bab8/marica-cvb3/paginaprincipal"
              />
            </Col>
            <Col>
              <HomeCard
                icon={GiFireFlower}
                title="Artesanato"
                description="Conheça e compre as criações dos artesãos de Maricá/RJ"
                link="http://www.feiraartemarica.com.br/"
              />
            </Col>
            <Col>
              <HomeCard
                icon={GiGreekTemple}
                title="Sobre a cidade"
                description="Conheça mais sobre Maricá"
                link="/sobre"
              />
            </Col>
          </Row>
        </Container>
      </ContainerBackground>
      <AppSection />
      <Footer />
    </>
  )
}

export default memo(Home)
