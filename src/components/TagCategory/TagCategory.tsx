import { memo } from 'react'

import { CategoryEventType } from 'types/EventType'

import { TagContainer } from './styles'

interface ICategoryProps {
  category: CategoryEventType
}

const TagCategory: React.FC<ICategoryProps> = ({ category }) => {
  return (
    <div>
      <TagContainer>{category.label}</TagContainer>
    </div>
  )
}

export default memo(TagCategory)
