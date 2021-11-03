import styled from "styled-components";

export const ContainerDescription = styled.div`
  display: flex;
`;
export const ContainerImg = styled.div`
  width: 70px;
  height: 70px;
  background-color: var(--collorGray100);
  margin: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Img = styled.img`
  width: 80%;
`;
export const ContainerProduct = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 60px;
  margin-top: 15px;
`;
export const ContainerQuantity = styled.div`
  width: 50px;
  display: flex;
  border-top: 2px solid var(--collorGray100);
  border-bottom: 2px solid var(--collorGray100);
`;
export const InputQuantity = styled.input`
  width: 30px;
`;

export const BtnRem = styled.button`
  width: 10px;
  color: var(--collorNegagite);
  background-color: var(--collorGray100);
`;
export const BtnAdd = styled.button`
  width: 10px;
  color: var(--collorNegagite);
  background-color: var(--collorGray100);
`;
export const ContainerTrash = styled.div`
  position: absolute;
  right: 10px;
  svg {
    margin-top: 15px;
    color: var(--collorGray100);
  }
`;
