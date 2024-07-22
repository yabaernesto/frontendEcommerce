import styled from "styled-components";

export const HeaderContainer = styled.div`
  background: ${(props) => props.theme['secondary-700']};
  color: ${(props) => props.theme['gray-00']};
  height: 8.75rem;
`;

export const ContentTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & h6 {
    margin-top: 1rem;
    font-size: 11pt;
  }
`;

export const ContainerHeaderRight = styled.div`
  margin-top: .75rem;
  display: flex;
  align-items: center;
`;

export const DivisorContainer = styled.div`
  border-bottom: 1px solid ${(props) => props.theme['gray-200']};
  margin-top: 1rem;
`;

export const IconsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .75rem;

  span {
    size: 14px;
  }

  a {
    margin-top: .30rem;
    color: ${(props) => props.theme['gray-00']};
  }
`;

export const SeparatorIcon = styled.div`
  width: 1px;
  margin: 0 1rem;
  height: 1.75rem;

  color: red;
  background: ${(props) => props.theme["gray-200"]};
`;

export const ContentRight = styled.div`
  display: flex;
  gap: 1.5rem;
`;

export const Button = styled.button`
  background: transparent;
  color: white;
  border: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: .20rem;
`;

export const ButtonIdioma = styled(Button)`

`;

export const ButtonMoeda = styled(Button)`

`;
