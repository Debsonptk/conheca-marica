import { memo } from 'react'

import { AiOutlineArrowLeft } from 'react-icons/ai'
import { Link } from 'react-router-dom'

interface IBaseComponentProps {
  title: string | undefined
}

const Titles: React.FC<IBaseComponentProps> = ({ title }) => {
  return (
    <div className="d-flex align-items-center pt-3">
      <Link to="/">
        <div className="d-flex align-items-center">
          <AiOutlineArrowLeft size={20} color="black" />
        </div>
      </Link>
      <h2 className="px-2">{title}</h2>
    </div>
  )
}

export default memo(Titles)
