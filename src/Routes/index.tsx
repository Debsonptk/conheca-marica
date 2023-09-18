import { memo } from 'react'

import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'

import BaresERestaurantes from 'pages/BaresERestaurantes'
import ComercioLocal from 'pages/ComercioLocal'
import Delivery from 'pages/Delivery'
import EspacosParaEventos from 'pages/EspacosParaEventos'
import Eventos from 'pages/Eventos'
import Home from 'pages/Home'
import HoteisEPousadas from 'pages/HoteisEPousadas'
import NotFound from 'pages/NotFound'
import PontosTuristicos from 'pages/PontosTuristicos'
import SobreACidade from 'pages/SobreACidade'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/pontos-turisticos" element={<PontosTuristicos />} />
        <Route path="/hoteis-e-pousadas" element={<HoteisEPousadas />} />
        <Route path="/bares-e-restaurantes" element={<BaresERestaurantes />} />
        <Route path="/comercio-local" element={<ComercioLocal />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/espacos-para-eventos" element={<EspacosParaEventos />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/sobre" element={<SobreACidade />} />
        <Route path="*" element={<NotFound />} />
      </Switch>
    </BrowserRouter>
  )
}

export default memo(Routes)
