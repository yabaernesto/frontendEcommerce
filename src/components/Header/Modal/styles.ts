import styled from "styled-components";

export const ContentRight = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const Button = styled.button`
  background: transparent;
  color: white;
  border: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: .20rem;
`;

export const ButtonIdioma = styled(Button)``;

export const ButtonMoeda = styled(Button)``;

const ButtonModal = styled.div`
  position: absolute;
  width: 11.25rem;
  padding: 8px;
  margin-top: 1.5rem;
  font-size: 10pt;

  background: ${(props) => props.theme["gray-00"]};
  border: 1px solid ${(props) => props.theme["gray-100"]};
  border-radius: 3px;

  & > div.container {
    color: ${(props) => props.theme["gray-600"]};
    display: flex;
    flex-direction: column;
    gap: 1rem;

    & div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;

      img {
        height: 1.25rem;
        width: 1.25rem;
        border-radius: 50%;
      }
    }

    button {
      background: transparent;
      border: none;
      cursor: pointer;
    }
  }
`;

export const ModalIdioma = styled(ButtonModal)`
  height: 7.75rem;
  margin-left: -8.5rem;
`;

export const ModalMoeda = styled(ButtonModal)`
  height: 5.5rem;
  margin-left: 4.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;
