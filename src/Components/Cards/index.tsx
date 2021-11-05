import { useContext } from "react";
import { CartContext } from "../../Providers/Cart";
import { ProductsContext } from "../../Providers/Products";
import {
  Button,
  Container,
  ContainerDescription,
  ContainerImg,
  Img,
  PCategory,
  PName,
  PPrice,
} from "./styles";

interface ItemData {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  userId: number;
  quantity: number;
  totValue: number;
}

interface CardProductsProps {
  item: ItemData;
}

const CardsProducts = ({ item }: CardProductsProps) => {
  const { addToCart } = useContext(CartContext);
  const {allProducts} = useContext(ProductsContext)

  return (
    <Container>
      <ContainerImg>
        <Img src={item.image} alt={item.name} />
      </ContainerImg>
      <ContainerDescription>
        <PName>{item.name}</PName>
        <PCategory>{item.category}</PCategory>
        <PPrice>R$ {item.price},00</PPrice>
        <Button
          onClick={() =>
            {addToCart({ ...item, quantity: 1, totValue: item.price }); allProducts()}
          }
        >
          Adicionar
        </Button>
      </ContainerDescription>
    </Container>
  );
};
export default CardsProducts;
