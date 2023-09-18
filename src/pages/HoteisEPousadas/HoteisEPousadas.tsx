import { memo, useEffect } from 'react'

import { Container } from 'react-bootstrap'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { Link } from 'react-router-dom'

import Footer from 'components/Footer'
import Header from 'components/Header'

import useTitle from 'hooks/useTitle'

const HoteisEPousadas: React.FC = () => {
  const setTitle = useTitle()

  useEffect(() => {
    setTitle('Hotéis e Pousadas | Conheça Maricá')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Header />
      <Container>
        <div className="d-flex align-items-center pt-3">
          <Link to="/">
            <div className="d-flex align-items-center">
              <AiOutlineArrowLeft size={20} color="black" />
            </div>
          </Link>
          <h2 className="px-2">Hotéis e Pousadas</h2>
        </div>
      </Container>
      <Footer />
    </>
  )
}

export default memo(HoteisEPousadas)
