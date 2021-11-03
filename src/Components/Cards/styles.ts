import styled from "styled-components";

export const Container = styled.div`
  width: 250px;
  height: 320px;
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  border-radius: 5px;
  border: 2px solid var(--collorGray100);
  &:hover{
    border: 2px solid var(--collorPrimary);
  }
`;

export const ContainerImg = styled.div`
  width: 100%;
  height: 150px;
  background: var(--collorGray0);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px 10px 0 0;
`;
export const Img = styled.img`
  width: 150px;
  height: 150px;
`;
export const ContainerDescription = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  margin-left: 10px;
`;

export const PName = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: var(--collorGray600);
`;
export const PCategory = styled.p`
  font-size: 12px;
  color: var(--collorGray300);
`;

export const PPrice = styled.p`
  font-size: 14px;
  color: var(--collorPrimary);
`;

export const Button = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 5px;
  background: var(--collorPrimary);
  color: #ffffff;
  font-weight: bold;
`;
