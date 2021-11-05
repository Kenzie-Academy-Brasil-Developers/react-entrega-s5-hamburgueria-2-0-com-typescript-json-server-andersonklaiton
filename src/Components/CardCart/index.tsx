import { useContext } from "react";
import { CartContext } from "../../Providers/Cart";

import {
  BtnRemoveAll,
  ContainerAll,
  ContainerCart,
  ContainerFooter,
  ContainerInfo,
  ContainerItens,
  ContainerPrice,
  HeaderCart,
  P1,
  P2,
  PTotal,
} from "./styles";
import { AiOutlineClose } from "react-icons/ai";

import ProductsCart from "../ProductsCart";

interface ICardProps{
  showCart:boolean,
  setShowCart:any
}

const CardCart = ({ showCart, setShowCart }: ICardProps) => {
  const { cart, removeAll } = useContext(CartContext);

  const totValue = cart.reduce((acc, act) => acc + Number(act.totValue), 0);
  const appearCart = () => {
    setShowCart(!showCart);
  };

  return (
    <>
      {showCart && (
        <ContainerAll>
          <ContainerCart>
            <HeaderCart>
              <p>Carrinho de compras</p>
              <AiOutlineClose onClick={() => setShowCart(appearCart())} />
            </HeaderCart>
            <ContainerItens>
              {cart.length === 0 ? (
                <ContainerInfo>
                  <P1>Sua sacola está vazia</P1>
                  <P2>Adicione itens</P2>
                </ContainerInfo>
              ) : (
                <>
                  {cart &&
                    cart.map((item, index) => (
                      <ProductsCart item={item} key={index} />
                    ))}
                  <ContainerFooter>
                    <ContainerPrice>
                      <PTotal>Total</PTotal>
                      <p>R$ {totValue},00</p>
                    </ContainerPrice>
                    <BtnRemoveAll onClick={() => removeAll()}>
                      Remover Todos
                    </BtnRemoveAll>
                  </ContainerFooter>
                </>
              )}
            </ContainerItens>
          </ContainerCart>
        </ContainerAll>
      )}
    </>
  );
};
export default CardCart;
