import { memo } from 'react'

import { Link } from 'react-router-dom'

import { CategoryEventType } from 'types/EventType'

import { TagContainer } from './styles'

interface ICategoryProps {
  category: CategoryEventType
}

const TagCategory: React.FC<ICategoryProps> = ({ category }) => {
  const pathArray = window.location.pathname.split('/')
  const categoryName = pathArray[1]

  return (
    <Link
      to={`/${categoryName}/categorias/${category.id}/${category.label}`}
      className="text-decoration-none"
    >
      <TagContainer>{category.label}</TagContainer>
    </Link>
  )
}

export default memo(TagCategory)
