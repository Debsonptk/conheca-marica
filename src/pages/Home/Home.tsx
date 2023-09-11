import { memo, useEffect } from 'react'

import useTitle from 'hooks/useTitle'

const Home: React.FC = () => {
  const setTitle = useTitle()

  useEffect(() => {
    setTitle('Home')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <h1>Conheça Maricá</h1>
    </div>
  )
}

export default memo(Home)
