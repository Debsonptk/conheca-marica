import styled, { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    :root{
    };

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    };

    html, body, #root{
        min-height: 100vh;
    };

    p {
        margin-top: 0;
        margin-bottom: 0;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    a:hover {
        color: inherit;
    }
`
export const MainStyled = styled.main`
  background-color: #f5f5f5;
  padding-bottom: 2.5rem;
  min-height: 70vh;
`
