import styled from "styled-components";

export const ContainerAll = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 767px) {
    flex-direction: row;
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
  height: 440px;
`;

export const Form = styled.form`
  margin: 0 auto;
  width: 90%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const P = styled.p`
  font-weight: 700;
  margin: 10px 10px;
  color: var(--collorGray600);
`;

export const Label = styled.label`
  font-size: 12px;
  color: var(--collorGray300);
  text-decoration: underline;
  margin: 0 10px;
`;

export const DivTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BtnCad = styled.button`
  height: 50px;
  border-radius: 8px;
  background-color: var(--collorGray0);
  color: var(--collorGray300);
  font-size: 20px;
`;
