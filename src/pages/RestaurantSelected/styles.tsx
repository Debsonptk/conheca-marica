import styled from 'styled-components'

interface ICoverImgProps {
  capa: string
}

export const ContainerBg = styled.div`
  background-color: #f5f5f5;
  .custom-link {
    color: #007bff;
  }
`
export const ImageDiv = styled.div<ICoverImgProps>`
  background-image: ${({ capa }) => `url(${capa})`};
  width: 100%;
  height: 350px;
  background-size: cover;
  background-position: center center;
`
export const IconDiv = styled.div`
  color: #6ebd00;
  margin-right: 5px;
`
