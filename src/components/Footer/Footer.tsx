/* eslint-disable import/order */
import { memo } from 'react'

import maricarecebe from 'Assets/MaricaRecebe.png'
import maricaturismo from 'Assets/MaricaTurismo.png'
import { Col, Container, Row } from 'react-bootstrap'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

import { BackgroundContainer, ImageSize } from './styles'

const Footer: React.FC = () => {
  return (
    <BackgroundContainer>
      <Container>
        <Row className="justify-content-between">
          <Col className="d-flex flex-column">
            <div className="d-flex pt-3 justify-content-center justify-content-lg-start">
              <Link
                to="https://www.facebook.com/prefeiturademarica?_rdc=1&_rdr"
                target="_blank"
                className="px-2 text-decoration-none text-white"
              >
                <div className="d-flex">
                  <FaFacebook color="white" size="19px" />
                  <span className="px-2 d-none d-md-inline">Facebook</span>
                </div>
              </Link>
              <Link
                to="https://www.instagram.com/prefeiturademarica"
                target="_blank"
                className="px-2 text-decoration-none text-white"
              >
                <div className="d-flex">
                  <FaInstagram color="white" size="19px" />
                  <span className="px-2 d-none d-md-inline">Instagram</span>
                </div>
              </Link>
              <Link
                to="https://twitter.com/i/flow/login?redirect_after_login=%2FMaricaRJ"
                target="_blank"
                className="px-2 text-decoration-none text-white"
              >
                <div className="d-flex">
                  <FaXTwitter color="white" size="19px" />
                  <span className="px-2 d-none d-md-inline">Twitter</span>
                </div>
              </Link>
              <Link
                to="https://www.youtube.com/user/prefeiturademarica1"
                target="_blank"
                className="px-2 text-decoration-none text-white"
              >
                <div className="d-flex">
                  <FaYoutube color="white" size="19px" />
                  <span className="px-2 d-none d-md-inline">Youtube</span>
                </div>
              </Link>
            </div>
            <div className=" pt-3 pb-3 px-2 text-center text-lg-start ">
              <Link
                to="https://app.marica2030.com.br/login"
                target="_blank"
                className="text-white"
              >
                <span>Área do comerciante</span>
              </Link>
            </div>
          </Col>
          <Col className="d-flex flex-column flex-md-row col-xl-6 justify-content-center justify-content-xl-end text-center text-md-left">
            <div className="mt-3">
              <ImageSize
                src={maricarecebe}
                alt="Maricá Recebe"
                className="img-fluid"
              />
            </div>
            <div className="mt-3 mx-5">
              <p>
                <Link
                  to="https://www.conhecamarica.com.br/static/media/guia-gastronomico.f9556598.pdf"
                  target="_blank"
                  className="text-white"
                >
                  Manual Gastronomia
                </Link>
              </p>
              <p>
                <Link
                  to="https://www.conhecamarica.com.br/static/media/guia-hospedagem.2046547a.pdf"
                  target="_blank"
                  className="text-white"
                >
                  Manual Hospedagem
                </Link>
              </p>
            </div>
            <div className="mt-3">
              <ImageSize
                src={maricaturismo}
                alt="Maricá Turismo"
                className="img-fluid"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </BackgroundContainer>
  )
}

export default memo(Footer)
