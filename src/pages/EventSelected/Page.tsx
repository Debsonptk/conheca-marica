import { memo, useEffect } from 'react'

import { Container, Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

import { useEvent } from 'context/EventContext'

import Footer from 'components/Footer'
import Header from 'components/Header'
import Titles from 'components/Titles'

import useTitle from 'hooks/useTitle'

import { ContainerBg } from './styles'

const EventoSelecionado: React.FC = () => {
  const setTitle = useTitle()
  const { isLoading, event, fetchEvent } = useEvent()
  const { id } = useParams()

  useEffect(() => {
    setTitle(`${event?.nome}`)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (id) fetchEvent(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  return (
    <>
      <Header />
      <ContainerBg>
        {isLoading && (
          <div className="d-flex justify-content-center pb-4 pt-4">
            <Spinner animation="border" variant="secondary" />
          </div>
        )}
        <Container>
          <Titles title={event?.nome} />
        </Container>
      </ContainerBg>
      <Footer />
    </>
  )
}

export default memo(EventoSelecionado)
