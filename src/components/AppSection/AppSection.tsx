/* eslint-disable import/order */
import { memo } from 'react'

import apple from 'Assets/AppleStore.png'
import google from 'Assets/GooglePlay.png'
import maricaApp from 'Assets/MaricaApp.png'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { BackgroundContainer, ParagraphSize, TextSize } from './styles'

const AppSection: React.FC = () => {
  return (
    <BackgroundContainer className="pt-5 pb-5">
      <Container>
        <Row className="row-cols-1 row-cols-md-2">
          <Col className="text-white d-flex flex-column">
            <TextSize>Conheça nosso aplicativo</TextSize>
            <ParagraphSize className="pb-5 pt-3">
              Tenha o Guia Oficial de Turismo de Maricá a qualquer momento, na
              palma das suas mãos!
            </ParagraphSize>
            <div className="d-flex mt-5">
              <div className="px-2">
                <Link
                  to="https://play.google.com/store/apps/details?id=com.marica2030.app"
                  target="_blank"
                >
                  <img src={google} alt="Google Play" className="img-fluid" />
                </Link>
              </div>
              <div>
                <Link
                  to="https://apps.apple.com/br/app/maric%C3%A1-oficial/id1493299199"
                  target="_blank"
                >
                  <img src={apple} alt="Google Play" className="img-fluid" />
                </Link>
              </div>
            </div>
          </Col>
          <Col className="d-flex justify-content-end">
            <img src={maricaApp} alt="Maricá App" className="img-fluid pt-1" />
          </Col>
        </Row>
      </Container>
    </BackgroundContainer>
  )
}

export default memo(AppSection)
