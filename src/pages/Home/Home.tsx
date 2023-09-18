import { memo, useEffect } from 'react'

import { Carousel, Container } from 'react-bootstrap'

import { useBanners } from 'context/BannerContext'

import AppSection from 'components/AppSection'
import Footer from 'components/Footer'
import Header from 'components/Header'

import useTitle from 'hooks/useTitle'

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
      <Container>
        <h1>Main</h1>
      </Container>
      <AppSection />
      <Footer />
    </>
  )
}

export default memo(Home)
