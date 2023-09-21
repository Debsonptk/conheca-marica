import { memo } from 'react'

import { EventsProvider } from 'context/EventContext'

import EventoSelecionado from './EventoSelecionado'

const EventoSelecionadoContainer: React.FC = () => {
  return (
    <EventsProvider>
      <EventoSelecionado />
    </EventsProvider>
  )
}

export default memo(EventoSelecionadoContainer)
