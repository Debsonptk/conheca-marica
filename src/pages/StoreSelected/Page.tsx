import { memo, useEffect } from 'react'

import { Container, Spinner } from 'react-bootstrap'

import { useStores } from 'context/StoreContext'

import Footer from 'components/Footer'
import Header from 'components/Header'
import Titles from 'components/Titles'

import useTitle from 'hooks/useTitle'

const ComercioLocal: React.FC = () => {
  const setTitle = useTitle()
  const { isLoading } = useStores()

  useEffect(() => {
    setTitle('Comércio Local | Conheça Maricá')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Header />
      <Container>
        <Titles title="Comércio Local" />
        {isLoading && (
          <div className="d-flex justify-content-center">
            <Spinner animation="border" variant="secondary" />
          </div>
        )}
      </Container>
      <Footer />
    </>
  )
}

export default memo(ComercioLocal)
