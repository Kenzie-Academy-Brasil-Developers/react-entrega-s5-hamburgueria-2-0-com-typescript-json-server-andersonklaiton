import { useState, useEffect, createContext, ReactNode } from "react";
import { toast } from "react-toastify";
import api from "../../Services/api";

interface ProductsProps {
  children: ReactNode;
}

interface ProductData {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
}

interface IProducts {
  products: ProductData[];
  filterProduct: (searchProduct: string) => void;
  allProducts: ()=>void
}

export const ProductsContext = createContext<IProducts>(
  {} as IProducts
);

export const ProductsProvider = ({ children }: ProductsProps) => {
  const [products, setProducts] = useState<ProductData[]>([] as ProductData[]);

  const allProducts = () => {
    api
      .get("products")
      .then((response) => setProducts(response.data))
      .catch(() => toast.error("Algo deu Errado!"));
  };

  useEffect(() => {
    allProducts();
  }, []);

  const filterProduct = (searchProduct: string) => {
    if (searchProduct === "") {
      allProducts();
    } else {
      setProducts(
        products.filter(
          (item) =>
            item.name.toLocaleLowerCase().includes(searchProduct)
        )
      );
    }
  };

  return (
    <ProductsContext.Provider value={{ products, filterProduct, allProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};
