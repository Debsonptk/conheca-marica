import { memo, useEffect } from 'react'

import useTitle from 'hooks/useTitle'

const NotFound: React.FC = () => {
  const setTitle = useTitle()

  useEffect(() => {
    setTitle('Página não encontrada')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <h1>PÁGINA NÃO ENCONTRADA</h1>
}

export default memo(NotFound)
