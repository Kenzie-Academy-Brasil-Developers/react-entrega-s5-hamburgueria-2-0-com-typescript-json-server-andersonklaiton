import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  height: 95px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  border: 1px solid var(--collorGray100);
  border-radius: 5px;
`;

export const Icon = styled.div`
  width: 120px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #27ae603d;
  margin: 10px;
  border-radius: 5px;
  svg{
      color: var(--collorPrimary);
      width: 25px;
      height: 25px;

  }
`;

export const P = styled.p`
  font-size: 14px;
  color: var(--collorGray300);
  strong{
      color: var(--collorGray600);
  }
`;
