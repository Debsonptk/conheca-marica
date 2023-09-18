import { Card } from 'react-bootstrap'
import styled from 'styled-components'

export const BackgroundContainer = styled(Card)`
  background-color: #fff;
  padding: 20px 30px 20px 30px;
  border: none;
  color: #444;
`
export const TextSize = styled.p`
  font-size: 14px;
  color: #858c94;
`
export const Button = styled.button`
  padding: 0px 30px 0px 30px;
  border-radius: 40px;
  background-color: #fff;
  color: #6ebd00;
  border: 1px solid #6ebd00;
  font-size: 20px;

  &&:hover {
    color: #fff;
    background-color: #6ebd00;
  }
`
