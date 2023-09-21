import { memo } from 'react'

import { EventsProvider } from 'context/EventContext'

import Page from './Page'

const EventoSelecionadoContainer: React.FC = () => {
  return (
    <EventsProvider>
      <Page />
    </EventsProvider>
  )
}

export default memo(EventoSelecionadoContainer)
