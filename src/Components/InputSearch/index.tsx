import { BiSearchAlt2 } from "react-icons/bi";
import { ContainerIcon, ContainerInput, InputSe } from "./styles";

const InputSearch = () => {
  return (
    <ContainerInput>
      <InputSe placeholder="Digitar Pesquisa" />
      <ContainerIcon>
        <BiSearchAlt2 />
      </ContainerIcon>
    </ContainerInput>
  );
};
export default InputSearch;
