import styled from 'styled-components'

interface ICoverImgProps {
  capa: string
}

export const ContainerBg = styled.div`
  background-color: #f5f5f5;
`

export const ImageDiv = styled.div<ICoverImgProps>`
  width: 100%;
  height: 200px;
  background-size: cover;
  background-position: center center;
`
