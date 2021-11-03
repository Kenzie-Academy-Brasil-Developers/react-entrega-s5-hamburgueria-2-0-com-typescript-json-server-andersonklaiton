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

interface ProductsProviderData {
  products: ProductData[];
  filterProduct: (searchProduct: string) => void;
}

export const ProductsContext = createContext<ProductsProviderData>(
  {} as ProductsProviderData
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
            item.name.toLocaleLowerCase() === searchProduct.toLocaleLowerCase()
        )
      );
    }
  };

  return (
    <ProductsContext.Provider value={{ products, filterProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};
