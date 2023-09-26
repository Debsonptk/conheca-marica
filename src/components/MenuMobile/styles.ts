import styled from 'styled-components'

interface IMenuProps {
  $isMenuOpened: boolean
}

export const NavSection = styled.div`
  font-weight: 400;
  display: block;
  font-size: 16px;
  color: #191919;
  background-color: transparent;
  font-weight: 700;
`

export const MenuMb = styled.div<IMenuProps>`
  background-color: #add8e6;
  height: 100rem;
  top: 0;
  left: ${(props) => (props.$isMenuOpened ? 0 : -75)}%;
  padding: 0px;
  width: 25%;
  transition: all 0.5s ease-out;
  z-index: 10;
  > svg {
    position: absolute;
    top: 1rem;
  }

  a,
  a:visited {
    color: #191919;
    background-color: transparent;
  }
`
export const MenuOverlay = styled.div<IMenuProps>`
  opacity: ${(props) => (props.$isMenuOpened ? 1 : 0)};
  visibility: ${(props) => (props.$isMenuOpened ? 'visible' : 'hidden')};
  transition: all 0.1s ease-out;
  z-index: 5;
  top: 0;
  height: 100vh;
`
