import { Dispatch, memo, ReactElement, SetStateAction } from 'react'

import { AiFillHome } from 'react-icons/ai'
import { FaUmbrellaBeach, FaRoute, FaRegCalendarAlt } from 'react-icons/fa'
import { GiFireFlower, GiForkKnifeSpoon, GiMicrophone } from 'react-icons/gi'
import { IoIosInformationCircleOutline } from 'react-icons/io'
import { IoClose } from 'react-icons/io5'
import { MdHotel, MdStore } from 'react-icons/md'
import { RiMotorbikeFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

import { MenuContainer, MenuOverlay } from './styles'

interface IMenuMobileProps {
  children?: React.ReactNode
  menuIsVisible: boolean
  setMenuIsVisible: Dispatch<SetStateAction<boolean>>
}

const MenuMobile: React.FC<IMenuMobileProps> = ({
  children,
  menuIsVisible,
  setMenuIsVisible,
}) => {
  children as ReactElement
  return (
    <>
      <MenuOverlay
        menuIsVisible={menuIsVisible}
        onClick={() => setMenuIsVisible(false)}
        className="position-fixed"
      />

      <MenuContainer isVisible={menuIsVisible}>
        <IoClose
          color="white"
          type="button"
          size={22}
          onClick={() => setMenuIsVisible(false)}
        />
        <nav className="pt-5">
          <Link to="/" className="pt-5">
            <AiFillHome size={20} />
            <span className="px-2">Inicial</span>
          </Link>
          <Link to="/sobre">
            <IoIosInformationCircleOutline size={20} />
            <span className="px-2">Sobre a cidade</span>
          </Link>
          <Link to="/pontos-turisticos">
            <FaUmbrellaBeach size={20} />
            <span className="px-2">Pontos Turísticos</span>
          </Link>
          <Link to="/hoteis-e-pousadas">
            <MdHotel size={20} />
            <span className="px-2">Hotéis e Pousadas</span>
          </Link>
          <Link to="/bares-e-restaurantes">
            <GiForkKnifeSpoon size={20} />
            <span className="px-2">Bares e Restaurantes</span>
          </Link>
          <Link to="/delivery">
            <RiMotorbikeFill size={20} />
            <span className="px-2">Delivery</span>
          </Link>
          <Link to="/comercio-local">
            <MdStore size={20} />
            <span className="px-2">Comércio Local</span>
          </Link>
          <Link to="/espacos-para-eventos">
            <GiMicrophone size={20} />
            <span className="px-2">Espaços para Eventos</span>
          </Link>
          <Link to="/eventos">
            <FaRegCalendarAlt size={20} />
            <span className="px-2">Eventos</span>
          </Link>
          <Link
            to="https://contato.site/5d9bab8/marica-cvb3/paginaprincipal"
            target="_blank"
            rel="noreferrer"
          >
            <FaRoute size={20} />
            <span className="px-2">Roteiros Turísticos</span>
          </Link>
          <Link
            to="http://www.feirartemarica.com.br/"
            target="_blank"
            rel="noreferrer"
          >
            <GiFireFlower size={20} />
            <span className="px-2">Artesanato</span>
          </Link>
        </nav>
      </MenuContainer>
    </>
  )
}
export default memo(MenuMobile)
