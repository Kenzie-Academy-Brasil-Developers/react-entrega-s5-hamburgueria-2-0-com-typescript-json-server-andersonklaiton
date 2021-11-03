import { useContext } from "react";
import Header from "../../Components/Header";
import { ProductsContext } from "../../Providers/Products";
import {
  BtnSearch,
  ContainerHeader,
  ContainerIcons,
  ContainerInput,
  ContainerProduct,
  InputSearch,
  Span,
} from "./styles";
import { MdLogout } from "react-icons/md";
import { BsFillCartFill } from "react-icons/bs";
import { BiSearchAlt2 } from "react-icons/bi";
import CardsProducts from "../../Components/Cards";
import { AuthContext } from "../../Providers/User";
import { Redirect, useHistory } from "react-router-dom";
import { CartContext } from "../../Providers/Cart";
import { useState } from "react";
import CardCart from "../../Components/CardCart";

const Products = () => {
  const { products, filterProduct } = useContext(ProductsContext);
  const history = useHistory();
  const { logout } = useContext(AuthContext);
  const { cart } = useContext(CartContext);
  const [showCart, setShowCart] = useState(false);
  const [showInput, setShowInput]= useState(true)
  const [getProduct, setGetProduct]=useState("")
  const token = localStorage.getItem("token:hamburgueria")

  const appearCart = () => {
    setShowCart(!showCart);
  };

  if(!token){
    return<Redirect to="/"/>
  }


  return (
    <>
      {showCart && <CardCart showCart={showCart} setShowCart={setShowCart} />}
      <ContainerHeader>
        <Header />
        <ContainerIcons>
          {showInput && (
            <ContainerInput>
              <InputSearch value={getProduct} onChange={(e)=>setGetProduct(e.target.value)} placeholder="Digitar Pesquisa" onBlur={(e)=>{if(e.target.value ===""){
                setShowInput(false)
              }}}/>
              <BtnSearch onClick={()=>{filterProduct(getProduct);setGetProduct("") }}><BiSearchAlt2 onClick={()=>setShowInput(!showInput)}/></BtnSearch>
            </ContainerInput >
          )}
          {!showInput && <BiSearchAlt2 onClick={()=>setShowInput(!showInput)}/>}
          <div>
            <Span>{cart.length}</Span>
            <BsFillCartFill onClick={() => appearCart()} />
          </div>
          <MdLogout onClick={() => logout(history)} />
        </ContainerIcons>
      </ContainerHeader>
      <ContainerProduct>
        {products.map((product, index) => {
          return <CardsProducts key={index} item={product as any} />;
        })}
      </ContainerProduct>
    </>
  );
};
export default Products;
