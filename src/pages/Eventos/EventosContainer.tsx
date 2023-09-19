import { memo } from 'react'

import { EventsProvider } from 'context/EventContext'

import Eventos from './Eventos'

const EventosContainer: React.FC = () => {
  return (
    <EventsProvider>
      <Eventos />
    </EventsProvider>
  )
}

export default memo(EventosContainer)
