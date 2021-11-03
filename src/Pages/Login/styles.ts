import styled from "styled-components";

export const ContainerAll = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 767px) {
    flex-direction: row-reverse;
    align-items: center;
    height: 100vh;
    width: 80%;
    margin: 0 auto;
  }
`;

export const ContainerHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 0 auto;
`;

export const ContainerForm = styled.div`
  width: 300px;
  margin: 10px auto;
  border: 1px solid var(--collorGray100);
  border-radius: 5px;
  height: 370px;
`;

export const P = styled.p`
  font-weight: 700;
  margin: 10px 10px;
  color: var(--collorGray600);
`;
export const P2 = styled.p`
  font-size: 12px;
  color: var(--collorGray300);
  text-align: center;
`

export const Form = styled.form`
  margin: 0 auto;
  width: 90%;
  height: 330px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Button = styled.button`
  height: 50px;
  border-radius: 8px;
  background: var(--collorPrimary);
  font-size: 20px;
  color: #ffffff;
`;
export const BtnCad = styled.button`
  height: 50px;
  border-radius: 8px;
  background-color: var(--collorGray0);
  color: var(--collorGray300);
  font-size: 20px;
`;
