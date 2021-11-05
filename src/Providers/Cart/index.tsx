import { createContext } from "react";
import { useState } from "react";
import { useCallback } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { ReactNode } from "react";
import { toast } from "react-toastify";
import api from "../../Services/api";
import { AuthContext } from "../User";

interface CartProps {
  children: ReactNode;
}

interface ICartProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  userId: number;
  quantity: number;
  totValue: number;
}

interface ICart {
  getCart: () => void;
  cart: ICartProduct[];
  addToCart: (item: ICartProduct) => void;
  removeFromCart: (id: number) => void;
  removeAll: () => void;
  upDateQuantityCart: (quantity: number, totValue: number, id: number) => void;
}

export const CartContext = createContext<ICart>({} as ICart);

export const CartProvider = ({ children }: CartProps) => {
  const { token, id } = useContext(AuthContext);

  const [cart, setCart] = useState<ICartProduct[]>([] as ICartProduct[]);

  const addToCart = (item: ICartProduct) => {
    let data = { ...item, userId: id };

    if (cart.every((items) => items.id !== item.id)) {
      api
        .post("cart", data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(() => {
          getCart();
          toast.success("Produto adicionado ao Carrinho");
        });
    } else {
      toast.error("Produto já adicionado no carrinho");
    }
  };

  const getCart = useCallback(() => {
    api
      .get(`cart?userId=${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setCart(response.data));
  }, [id, token]);

  const removeFromCart = (id: number) => {
    api
      .delete(`cart/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        if (cart.length > 0) {
          setCart([]);
          getCart();
          toast.success("Itém removido do carrinho");
        } else {
          getCart();
        }
      })
      .catch(() => {
        getCart();
      });
  };

  const removeAll = () => {
    cart.map((item) => {
      api
        .delete(`cart/${item.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((_) => {
          if (cart.length > 0) {
            setCart([]);
            getCart();
          } else {
            getCart();
          }
        })
        .catch(() => {
          getCart();
        });
    });
    toast.success("Itens removidos do carrinho");
    getCart();
  };

  const upDateQuantityCart = (
    quantity: number,
    totValue: number,
    id: number
  ) => {
    api
      .patch(
        `cart/${id}`,
        { quantity: quantity, totValue: totValue },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => getCart());
  };

  useEffect(() => {
    getCart();
  }, [getCart]);

  return (
    <CartContext.Provider
      value={{
        getCart,
        cart,
        addToCart,
        removeFromCart,
        removeAll,
        upDateQuantityCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
