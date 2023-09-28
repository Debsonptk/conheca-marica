import styled, { keyframes } from 'styled-components'

interface IMenuContainerProps {
  isVisible: boolean
}

interface IMenuProps {
  menuIsVisible: boolean
}

const fadeIn = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`
const fadeOut = keyframes`
    from{
        opacity: 1;
    }
    to{
        opacity: 0;
    }
`
const enter = keyframes`
    from{
        right: -300pxpx;
    }
    to{
        right: 0;
    }
`
const leave = keyframes`
    from{
        right: 0;
    }
    to{
        right: -300pxpx;
    }
`

export const MenuContainer = styled.div<IMenuContainerProps>`
  position: fixed;
  width: 300px;
  top: 0;
  right: 0;
  left: ${(props) => (props.isVisible ? 0 : -300)}px;
  bottom: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: start;
  background: rgba(17, 18, 17, 0.91);
  animation: ${(props) => (props.isVisible ? enter : leave)} 0.4s ease-out;
  padding: 15px;

  > svg {
    position: absolute;
    top: 1rem;
    left: 1rem;
  }

  nav {
    display: flex;
    align-items: start;
    flex-direction: column;
    gap: 2rem;
  }

  a:link {
    color: white;
    text-decoration: none;
  }

  a:visited {
    color: white;
  }

  a:active {
    color: white;
  }
`
export const MenuOverlay = styled.div<IMenuProps>`
  opacity: ${(props) => (props.menuIsVisible ? 1 : 0)};
  visibility: ${(props) => (props.menuIsVisible ? 'visible' : 'hidden')};
  animation: ${(props) => (props.menuIsVisible ? fadeIn : fadeOut)} 0.2s
    ease-out;
  transition: all 0.2s ease-out;
  left: 0;
  z-index: 2;
  position: absolute;
  height: 100%;
  width: 100%;
`
