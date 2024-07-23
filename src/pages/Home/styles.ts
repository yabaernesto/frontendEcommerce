import styled from "styled-components";

export const ContainerHelp = styled.div`
  margin-top: 1rem;
  display: flex;
  font-size: 11pt;

  & .items {
    flex: 1;

    display: flex;
    align-items: center;
    gap: 1.5rem;
    width: 45rem;

    & div {
      display: flex;
      align-items: center;
      gap: .30rem;
      
      height: 3rem;
      cursor: pointer;
    }

    & div.active {
      background: ${(props) => props.theme["gray-50"]};
      
    }
  }

  .call {
    display: flex;
    align-items: center;
    gap: .30rem;
    cursor: pointer;
  }
`;

