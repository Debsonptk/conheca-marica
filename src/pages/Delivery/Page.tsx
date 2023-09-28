import { memo, useEffect } from 'react'

import { Container } from 'react-bootstrap'
import { FaMotorcycle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import Footer from 'components/Footer'
import Header from 'components/Header'
import Titles from 'components/Titles'

import useTitle from 'hooks/useTitle'

import { ContainerBg } from './styles'

const Delivery: React.FC = () => {
  const setTitle = useTitle()

  useEffect(() => {
    setTitle('Delivery | Conheça Maricá')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Header />
      <Container>
        <Titles title="Delivery" />
        <p className="fs-5 pt-3">Selecione o tipo de estabelecimento:</p>
        <div>
          <ContainerBg>
            <Link to="/bares-e-restaurantes" className="d-flex p-3 mb-4 mt-2">
              <FaMotorcycle size={22} color="#6ebd00" />
              <h6 className="px-2">Bares e Restaurantes</h6>
            </Link>
          </ContainerBg>
          <ContainerBg>
            <Link to="/comercio-local" className="d-flex p-3">
              <FaMotorcycle size={22} color="#6ebd00" />
              <h6 className="px-2">Comércio Local</h6>
            </Link>
          </ContainerBg>
        </div>
      </Container>
      <Footer />
    </>
  )
}

export default memo(Delivery)
