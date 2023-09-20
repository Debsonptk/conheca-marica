import { memo } from 'react'

import { CategoryEventType } from 'types/EventType'

import { TagContainer } from './styles'

interface ICategoryProps {
  category: CategoryEventType
}

const TagCategory: React.FC<ICategoryProps> = ({ category }) => {
  return <TagContainer>{category.label}</TagContainer>
}

export default memo(TagCategory)
