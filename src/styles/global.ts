import styled, { createGlobalStyle } from 'styled-components';

// estilos globais

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`;

export const ContainerBody = styled.div`
  margin: 0 18.75rem;
`;
