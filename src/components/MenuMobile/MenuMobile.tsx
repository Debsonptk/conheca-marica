import { memo, useState } from 'react'

import { AiOutlineClose, AiFillHome } from 'react-icons/ai'
import { FaUmbrellaBeach, FaMotorcycle, FaRoute } from 'react-icons/fa'
import { GiMicrophone, GiFireFlower, GiHamburgerMenu } from 'react-icons/gi'
import { IoIosInformationCircleOutline } from 'react-icons/io'
import { MdHotel, MdRestaurant, MdStore } from 'react-icons/md'
import { RiCalendar2Fill } from 'react-icons/ri'
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
          <div className="d-flex flex-column w-100 p-2">
            <Link
              to="/"
              className="pb-3  px-2 text-decoration-none text-white border-bottom"
            >
              <div className="d-flex">
                <AiFillHome size="18px" color="white" />
                <p className="px-2">Inicial</p>
              </div>
            </Link>
            <Link
              to="/"
              className="pb-3 pt-3 px-2 text-decoration-none text-white border-bottom"
            >
              <div className="d-flex">
                <IoIosInformationCircleOutline size="18px" color="white" />
                <p className="px-2">Sobre a Cidade</p>
              </div>
            </Link>
            <Link
              to="/pontos-turisticos"
              className="pb-3 pt-3 px-2 text-decoration-none text-white border-bottom"
            >
              <div className="d-flex">
                <FaUmbrellaBeach size="18px" color="white" />
                <p className="px-2">Pontos Turísticos</p>
              </div>
            </Link>
            <Link
              to="/hoteis-e-pousadas"
              className="pb-3 pt-3 px-2 text-decoration-none text-white border-bottom"
            >
              <div className="d-flex">
                <MdHotel size="18px" color="white" />
                <p className="px-2">Hotéis e Pousadas</p>
              </div>
            </Link>
            <Link
              to="/bares-e-restaurantes"
              className="pb-3 pt-3 px-2 text-decoration-none text-white border-bottom"
            >
              <div className="d-flex">
                <MdRestaurant size="18px" color="white" />
                <p className="px-2">Bares e Restaurantes</p>
              </div>
            </Link>
            <Link
              to="/delivery"
              className="pb-3 pt-3 px-2 text-decoration-none text-white border-bottom"
            >
              <div className="d-flex">
                <FaMotorcycle size="18px" color="white" />
                <p className="px-2">Delivery</p>
              </div>
            </Link>
            <Link
              to="/comercio-local"
              className="pb-3 pt-3 px-2 text-decoration-none text-white border-bottom"
            >
              <div className="d-flex">
                <MdStore size="18px" color="white" />
                <p className="px-2">Comércio Local</p>
              </div>
            </Link>
            <Link
              to="/espacos-para-eventos"
              className="pb-3 pt-3 px-2 text-decoration-none text-white border-bottom"
            >
              <div className="d-flex">
                <GiMicrophone size="18px" color="white" />
                <p className="px-2">Espaços para Eventos</p>
              </div>
            </Link>
            <Link
              to="/eventos"
              className="pb-3 pt-3 px-2 text-decoration-none text-white border-bottom"
            >
              <div className="d-flex">
                <RiCalendar2Fill size="18px" color="white" />
                <p className="px-2">Eventos</p>
              </div>
            </Link>
            <Link
              to="https://contato.site/5d9bab8/marica-cvb3/paginaprincipal"
              className="pb-3 pt-3 px-2 text-decoration-none text-white border-bottom"
              target="_blank"
            >
              <div className="d-flex">
                <FaRoute size="18px" color="white" />
                <p className="px-2">Roteiros Turísticos</p>
              </div>
            </Link>
            <Link
              to="http://www.feirartemarica.com.br/"
              className="pb-3 pt-3 px-2 text-decoration-none text-white border-bottom"
              target="_blank"
            >
              <div className="d-flex">
                <GiFireFlower size="18px" color="white" />
                <p className="px-2">Artesanato</p>
              </div>
            </Link>
          </div>
        </NavSection>
      </MenuMb>
    </>
  )
}

export default memo(MenuMobile)
