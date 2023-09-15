/* eslint-disable import/order */
import cover from 'Assets/BgBanner.png'
import styled from 'styled-components'

export const BackgroundContainer = styled.div`
  background-image: url(${cover});
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 100px;
  padding-bottom: 100px;
  background-position: center center;
`
export const TextSize = styled.h2`
  font-size: 60px;
`
export const ParagraphSize = styled.p`
  font-size: 20px;
`
