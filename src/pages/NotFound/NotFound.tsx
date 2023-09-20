import { memo, useEffect } from 'react'

import { Container } from 'react-bootstrap'

import Titles from 'components/Titles'

import useTitle from 'hooks/useTitle'

const NotFound: React.FC = () => {
  const setTitle = useTitle()

  useEffect(() => {
    setTitle('Página não encontrada')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container>
      <Titles title="PÁGINA NÃO ENCONTRADA" />
    </Container>
  )
}

export default memo(NotFound)
