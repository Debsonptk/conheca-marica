import { memo, useEffect } from 'react'

import { Container } from 'react-bootstrap'

import useTitle from 'hooks/useTitle'

const Home: React.FC = () => {
  const setTitle = useTitle()

  useEffect(() => {
    setTitle('Home')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container>
      <h1 className="text-center">Conheça Maricá</h1>
    </Container>
  )
}

export default memo(Home)
