/* eslint-disable import/order */
import { memo } from 'react'

import { IconType } from 'react-icons'
import { Link } from 'react-router-dom'

import { BackgroundContainer, Button, TextSize } from './styles'

interface IHomeCardProps {
  icon: IconType
  title: string
  description: string
  link?: string
}

const HomeCard: React.FC<IHomeCardProps> = ({
  icon,
  title,
  description,
  link,
}) => {
  const Icon = icon
  return (
    <BackgroundContainer className="d-flex flex-column align-items-center h-100">
      <div>
        <Icon size={55} />
      </div>
      <h5 className="text-center pt-2">{title}</h5>
      <TextSize className="d-none d-md-flex text-center mb-3 flex-grow-1">
        {description}
      </TextSize>
      <Link to={`${link}`}>
        <Button type="button">Acessar</Button>
      </Link>
    </BackgroundContainer>
  )
}

export default memo(HomeCard)
