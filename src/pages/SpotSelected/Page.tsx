import { memo, useEffect } from 'react'

import { Container, Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

import { useSpots } from 'context/SpotContext'

import Footer from 'components/Footer'
import Header from 'components/Header'
import Titles from 'components/Titles'

import useTitle from 'hooks/useTitle'

const Spot: React.FC = () => {
  const { id } = useParams()
  const setTitle = useTitle()
  const { isLoading, fetchSpot, spot } = useSpots()

  useEffect(() => {
    setTitle('Pontos Turísticos | Conheça Maricá')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (id) fetchSpot(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  return (
    <>
      <Header />
      <Container>
        {isLoading && (
          <div className="d-flex justify-content-center pb-4">
            <Spinner animation="border" variant="secondary" />
          </div>
        )}
        <Titles title={spot?.nome} />
      </Container>
      <Footer />
    </>
  )
}

export default memo(Spot)
