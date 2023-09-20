import { memo, useEffect } from 'react'

import { Container } from 'react-bootstrap'

import { useEvent } from 'context/EventContext'

import Footer from 'components/Footer'
import Header from 'components/Header'
import TagCategory from 'components/TagCategory'
import Titles from 'components/Titles'

import useTitle from 'hooks/useTitle'

import { ContainerBg } from './styles'

const Eventos: React.FC = () => {
  const { events, isLoading, eventCategory, fetchEvents, fetchSearchEvents } =
    useEvent()
  const setTitle = useTitle()

  useEffect(() => {
    setTitle('Eventos | Conheça Maricá')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Header />
      <ContainerBg>
        <Container>
          <Titles title="Eventos" />
          {isLoading && <p className="text-center">LOADING...</p>}
          <div className="d-flex flex-wrap pt-2 pb-4">
            {!isLoading &&
              Array.isArray(eventCategory) &&
              eventCategory.map((category) => (
                <div key={category.id}>
                  <TagCategory category={category} />
                </div>
              ))}
          </div>
        </Container>
      </ContainerBg>
      <Footer />
    </>
  )
}

export default memo(Eventos)
