import { memo, useEffect } from 'react'

import { Container, Spinner } from 'react-bootstrap'

import { useAbout } from 'context/AboutContext'

import Footer from 'components/Footer'
import Header from 'components/Header'
import Titles from 'components/Titles'

import useTitle from 'hooks/useTitle'

import { AboutBg, BodyBg } from './styles'

const SobreACidade: React.FC = () => {
  const setTitle = useTitle()
  const { about, isLoading, fetchAbout } = useAbout()

  useEffect(() => {
    setTitle('Sobre a cidade | Conheça Maricá')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    fetchAbout()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Header />
      {isLoading && (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" variant="secondary" />
        </div>
      )}
      {!isLoading && (
        <>
          <AboutBg />
          <Container className="py-5">
            <BodyBg className="d-flex flex-column py-5">
              <div className="d-flex flex-column py-2 px-3">
                <div className="px-5">
                  <div>
                    <Titles title="Conheça Maricá" />
                  </div>
                  <div />
                  <div
                    // eslint-disable-next-line react/no-danger, @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-non-null-asserted-optional-chain
                    dangerouslySetInnerHTML={{ __html: about?.sobre?.content! }}
                    className="justify-content-center py-3"
                  />
                </div>
              </div>
            </BodyBg>
          </Container>
        </>
      )}
      <Footer />
    </>
  )
}

export default memo(SobreACidade)
