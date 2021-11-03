import { useContext } from "react";
import { CartContext } from "../../Providers/Cart";
import {
  BtnAdd,
  BtnRem,
  ContainerDescription,
  ContainerImg,
  ContainerProduct,
  ContainerQuantity,
  ContainerTrash,
  Img,
  InputQuantity,
} from "./styles";
import { FaTrash } from "react-icons/fa";

interface ItemData {
  name: string;
  category: string;
  price: number;
  image: string;
  userId: number;
  id: number;
  quantity: number;
  totValue: number;
}

interface ProductsCartProps {
  item: ItemData;
}

const ProductsCart = ({ item }: ProductsCartProps) => {
  const { upDateQuantityCart, removeFromCart} = useContext(CartContext);

  const AddRemQuant = (equa: any) => {
    if (equa === "Add") {
      upDateQuantityCart(
        item.quantity + 1,
        (item.totValue += item.price),
        item.id
      );
    } else if (item.quantity > 1) {
      upDateQuantityCart(
        item.quantity - 1,
        (item.totValue -= item.price),
        item.id
      );
    }
  };

  return (
    <ContainerDescription>
      <ContainerImg>
        <Img alt={item.name} src={item.image} />
      </ContainerImg>
      <ContainerProduct>
        <p>{item.name}</p>{" "}
        <ContainerQuantity>
          <BtnRem onClick={() => AddRemQuant("Rem")}>-</BtnRem>
          <InputQuantity
            type="number"
            placeholder={item.quantity.toString()}
            value={item.quantity}
          />

          <BtnAdd onClick={() => AddRemQuant("Add")}>+</BtnAdd>
        </ContainerQuantity>
      </ContainerProduct>
      <ContainerTrash>
        <FaTrash onClick={() => removeFromCart(item.id)} />
      </ContainerTrash>
    </ContainerDescription>
  );
};
export default ProductsCart;
