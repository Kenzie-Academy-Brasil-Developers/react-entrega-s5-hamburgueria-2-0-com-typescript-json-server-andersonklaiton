import styled from "styled-components";

export const ContainerInput = styled.div`
  height: 25px;
  width: 90%;
  margin-top: -5px;
  display: none;
  @media (min-width: 676px) {
    width: 300px;
    display: block;
  }
`;

export const InputSe = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  border: 1px solid var(--collorGray100);
`;

export const ContainerIcon = styled.div`
  position: relative;
  top: -22px;
  left: 276px;
  background-color: var(--collorPrimary);
  width: 20px;
  height: 20px;
  display: flex;
  border-radius: 5px;
  justify-content: space-evenly;
  align-content: flex-end;
`;
