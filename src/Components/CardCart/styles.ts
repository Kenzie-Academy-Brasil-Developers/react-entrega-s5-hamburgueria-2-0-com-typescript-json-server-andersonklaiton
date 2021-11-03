import styled from "styled-components";

export const ContainerAll = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  background-color: rgba(51, 51, 51, 0.5);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  /* z-index: 1; */
`;
export const P1 = styled.p`
  font-size: 18px;
  color: var(--collorGray600);
  font-weight: bold;
`;

export const P2 = styled.p`
  font-size: 14px;
  color: var(--collorGray300);
  font-weight: bold;
`;

export const ContainerItens = styled.div`
  width: 100%;
  height: 100%;
`;
export const ContainerInfo = styled.div`
  height: 162px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const ContainerCart = styled.div`
  position: absolute;
  width: 300px;
  min-height: 200px;
  background-color: #ffffff;
  border-radius: 5px;
`;

export const HeaderCart = styled.div`
  background-color: var(--collorPrimary);
  border-radius: 5px 5px 0 0;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  p {
    color: #ffffff;
    font-weight: bold;
  }
  svg {
    color: #ffffff;
  }
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

export const ContainerProduct = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 60px;
  margin-top: 15px;
`;
export const ContainerDescription = styled.div`
  display: flex;
`;

export const Img = styled.img`
  width: 80%;
`;

export const ContainerTrash = styled.div`
  position: absolute;
  right: 10px;
  svg {
    margin-top: 15px;
    color: var(--collorGray100);
  }
`;

export const ContainerPrice = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 10px;
  padding-top: 10px;
  width: 90%;
  border-top: 2px solid var(--collorGray100);
`;

export const BtnRemoveAll = styled.button`
  width: 90%;
  height: 40px;
  margin: 10px;
  border-radius: 5px;
  background: var(--collorGray100);
  font-size: 16px;
  font-weight: bold;
  color: var(--collorGray300);
`;

export const ContainerFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const PTotal = styled.p`
  font-size: 14px;
  color: var(--collorGray600);
  font-weight: bold;
`;

export const PPrice = styled.p`
  font-size: 14px;
  color: var(--collorGray300);
  font-weight: bold;
`;
