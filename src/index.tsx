import React, { Suspense } from 'react'

import ReactDOM from 'react-dom/client'

import { EventsProvider } from 'context/EventContext'
import { SpotsProvider } from 'context/SpotContext'

import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Suspense>
      <SpotsProvider>
        <EventsProvider>
          <App />
        </EventsProvider>
      </SpotsProvider>
    </Suspense>
  </React.StrictMode>,
)
