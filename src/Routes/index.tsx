import { memo } from 'react'

import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'

import About from 'pages/About'
import Delivery from 'pages/Delivery'
import Events from 'pages/Events'
import EventSelected from 'pages/EventSelected'
import Home from 'pages/Home'
import Hotels from 'pages/Hotels'
import HotelSelected from 'pages/HotelSelected'
import NotFound from 'pages/NotFound'
import Restaurants from 'pages/Restaurants'
import RestaurantSelected from 'pages/RestaurantSelected'
import Spaces from 'pages/Spaces'
import SpaceSelected from 'pages/SpaceSelected'
import Spots from 'pages/Spots'
import SpotSelected from 'pages/SpotSelected'
import Stores from 'pages/Stores'
import StoreSelected from 'pages/StoreSelected'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/pontos-turisticos" element={<Spots />} />
        <Route path="/pontos-turisticos/:id/:name" element={<SpotSelected />} />
        <Route path="/hoteis-e-pousadas" element={<Hotels />} />
        <Route
          path="/hoteis-e-pousadas/:id/:name"
          element={<HotelSelected />}
        />
        <Route path="/bares-e-restaurantes" element={<Restaurants />} />
        <Route
          path="/bares-e-restaurantes/:id/:name"
          element={<RestaurantSelected />}
        />
        <Route path="/comercio-local" element={<Stores />} />
        <Route path="/comercio-local/:id/:name" element={<StoreSelected />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route
          path="/espacos-para-eventos/:id/:name"
          element={<SpaceSelected />}
        />
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
