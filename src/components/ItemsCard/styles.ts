import styled from 'styled-components'

interface ICoverImgProps {
  cover: string
}

export const CoverImage = styled.div<ICoverImgProps>`
  background-image: url(${({ cover }) => cover});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 6px 6px 0 0;
`
export const Card = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 1px 1px 5px 1px #ddd;
  font-weight: bold;

  h2 {
    color: #2e677f;
    font-size: 20px;
  }

  h2:hover {
    text-decoration: underline;
  }
`
export const CategoryStyle = styled.h6`
  color: #8f8f8f;
  background: #eeeeee;
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 3px 18px 3px 18px;
  border-radius: 10px;
  font-size: 12px;
`
export const AdressStyle = styled.h6`
  color: #c0c4c7;
  font-size: 1rem;
`
