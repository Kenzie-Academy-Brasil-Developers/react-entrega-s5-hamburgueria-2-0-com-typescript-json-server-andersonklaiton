import { FiShoppingBag } from "react-icons/fi";
import { Container, Icon, P } from "./styles";

const CardWelcome = () => {
  return (
    <Container>
      <Icon>
        <FiShoppingBag />
      </Icon>
      <div>
        <P>
          A vida é como um sanduíche, é preciso recheá-la com os{" "}
          <strong>melhores </strong>
          ingredientes.
        </P>
      </div>
    </Container>
  );
};
export default CardWelcome;
