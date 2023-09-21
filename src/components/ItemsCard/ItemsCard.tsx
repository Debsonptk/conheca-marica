import { memo } from 'react'

import { Ratio } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { EventType } from 'types/EventType'
import { HotelType } from 'types/HotelType'
import { RestaurantType } from 'types/RestaurantType'
import { SpaceType } from 'types/SpaceType'
import { SpotType } from 'types/SpotType'
import { StoreType } from 'types/StoreType'

import { AdressStyle, Card, CategoryStyle, CoverImage } from './styles'

interface IItemsProps {
  item:
    | SpotType
    | EventType
    | HotelType
    | RestaurantType
    | SpaceType
    | StoreType
  endPoint?: string
}

const ItemsCard: React.FC<IItemsProps> = ({ item, endPoint }) => {
  return (
    <Card className="w-100">
      <Ratio aspectRatio="16x9">
        <CoverImage cover={item.capa} />
      </Ratio>
      <div className="px-4 pt-4">
        <Link
          to={`/${endPoint}/${item.id}/${item.nome}`}
          className="text-decoration-none"
        >
          <h2>{item.nome}</h2>
        </Link>
        <Link to="/" className="d-flex flex-wrap pb-2 text-decoration-none">
          {item.categorias.slice(0, 4).map((category) => (
            <CategoryStyle key={category.id}>{category.label}</CategoryStyle>
          ))}
        </Link>
        <AdressStyle className="flex-grow-1">
          {item.enderecos.map((address) => (
            <p key={address.id} className="fs-5 text-muted">
              {address.label}
            </p>
          ))}
        </AdressStyle>
      </div>
    </Card>
  )
}

export default memo(ItemsCard)
