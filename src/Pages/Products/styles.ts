import styled from "styled-components";

export const ContainerHeader = styled.div`
  background: var(--collorGray0);
  height: 50px;
  justify-content: space-between;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
`;
export const ContainerProduct = styled.div`
  margin: 60px auto;
  @media (min-width: 676px) {
    display: flex;
    flex-wrap: wrap;
    width: 95%;
    margin: 60px auto;
  }
`;
export const ContainerIcons = styled.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
  svg {
    color: #bdbdbd;
    margin-left: 10px;
  }
  .show {
    display: block;
    @media (min-width: 676px) {
      display: none;
    }
  }
`;

export const Span = styled.span`
  position: absolute;
  top: 15px;
  margin-left: 20px;
  font-size: 10px;
  background: var(--collorPrimary);
  width: 10px;
  height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  border-radius: 10px;
`;

export const ContainerInput = styled.div`
  width: 250px;
  height: 30px;
  border: 2px solid var(--collorGray100);
  background-color: #ffffff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 515px) {
    position: absolute;
    top: 10px;
    left: 10%;
    z-index: 1;
  }
`;

export const InputSearch = styled.input`
  width: 90%;
  height: 90%;
  font-size: 16px;
  color: var(--collorGray300);
  padding: 0 10px;
`;
export const BtnSearch = styled.button`
  margin: 0 1px;
  width: 25px;
  height: 25px;
  background-color: var(--collorPrimary);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    color: #ffffff;
    font-size: 20px;
    margin-left: 0;
  }
`;
