/* eslint-disable import/order */
import { memo } from 'react'

import logo from 'Assets/LogoConhecaMarica.png'
import logosmall from 'Assets/LogoMarica.png'
import { Col, Container, Row } from 'react-bootstrap'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

import MenuMobile from 'components/MenuMobile'

import { BackgroundContainer } from './styles'

const Header: React.FC = () => {
  return (
    <BackgroundContainer>
      <Container>
        <Row className="justify-content-between">
          <Col className="d-flex align-items-center">
            <div>
              <MenuMobile />
            </div>
          </Col>
          <Col className="d-flex">
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                className="pt-4 pb-3 img-fluid d-none d-md-block"
              />
              <img
                src={logosmall}
                alt="logo"
                className="pt-4 pb-3 img-fluid d-md-none"
              />
            </Link>
          </Col>
          <Col className="d-none d-md-flex d-flex align-items-center justify-content-end">
            <div className="">
              <Link
                to="https://www.facebook.com/prefeiturademarica?_rdc=1&_rdr"
                target="_blank"
                className="px-1"
              >
                <FaFacebook color="white" size="19px" />
              </Link>
              <Link
                to="https://www.instagram.com/prefeiturademarica"
                target="_blank"
                className="px-1"
              >
                <FaInstagram color="white" size="19px" />
              </Link>
              <Link
                to="https://twitter.com/i/flow/login?redirect_after_login=%2FMaricaRJ"
                target="_blank"
                className="px-1"
              >
                <FaXTwitter color="white" size="19px" />
              </Link>
              <Link
                to="https://www.youtube.com/user/prefeiturademarica1"
                target="_blank"
                className="px-1"
              >
                <FaYoutube color="white" size="19px" />
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </BackgroundContainer>
  )
}

export default memo(Header)
