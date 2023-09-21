import { memo } from 'react'

import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'

import About from 'pages/About'
import Delivery from 'pages/Delivery'
import Events from 'pages/Events'
import EventSelected from 'pages/EventSelected'
import Home from 'pages/Home'
import Hotels from 'pages/Hotels'
import NotFound from 'pages/NotFound'
import Restaurants from 'pages/Restaurants'
import Spaces from 'pages/Spaces'
import Spots from 'pages/Spots'
import SpotSelected from 'pages/SpotSelected'
import Stores from 'pages/Stores'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/pontos-turisticos" element={<Spots />} />
        <Route path="/pontos-turisticos/:id/:name" element={<SpotSelected />} />
        <Route path="/hoteis-e-pousadas" element={<Hotels />} />
        <Route path="/bares-e-restaurantes" element={<Restaurants />} />
        <Route path="/comercio-local" element={<Stores />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/espacos-para-eventos" element={<Spaces />} />
        <Route path="/eventos" element={<Events />} />
        <Route path="/eventos/:id/:name" element={<EventSelected />} />
        <Route path="/sobre" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Switch>
    </BrowserRouter>
  )
}

export default memo(Routes)
