import React, { Suspense } from 'react'

import ReactDOM from 'react-dom/client'

import GlobalStyles from 'styles/GlobalStyles'

import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
    <Suspense>
      <App />
    </Suspense>
  </React.StrictMode>,
)
