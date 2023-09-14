import { memo, useState } from 'react'

import { AiOutlineClose, AiFillHome } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from 'react-router-dom'

import { MenuMb, MenuOverlay, NavSection } from './styles'

interface IMenuMobileProps {
  children?: React.ReactNode
}

const MenuMobile: React.FC<IMenuMobileProps> = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false)
  return (
    <>
      <MenuOverlay
        $isMenuOpened={isMenuOpened}
        onClick={() => setIsMenuOpened(false)}
        className="position-fixed h-100 w-100"
      />
      <div className="d-flex align-items-center">
        <GiHamburgerMenu
          color="white"
          type="button"
          onClick={() => setIsMenuOpened(true)}
          size={30}
        />
        <h6 className="text-white px-2 pt-2">Menu</h6>
      </div>
      <MenuMb
        $isMenuOpened={isMenuOpened}
        className="d-flex flex-column  position-fixed bg-dark h-100"
      >
        <NavSection className=" w-100">
          <div className=" d-flex flex-column justify-content-center mb-3 p-3">
            <AiOutlineClose
              color="white"
              size="15px"
              type="button"
              onClick={() => setIsMenuOpened(false)}
              className="align-self-end"
            />
          </div>
          <div className="d-flex flex-column w-100">
            <Link
              to="/"
              className="pb-3 pt-2 px-2 text-decoration-none text-white border-bottom"
            >
              <AiFillHome size="15px" color="white" /> Inicial
            </Link>
            <Link
              to="/"
              className="pb-3 px-2 text-decoration-none text-white border-bottom"
            >
              Sobre a Cidade
            </Link>
            <Link
              to="/"
              className="pb-3 px-2 text-decoration-none text-white border-bottom"
            >
              Pontos Turísticos
            </Link>
          </div>
        </NavSection>
      </MenuMb>
    </>
  )
}

export default memo(MenuMobile)
