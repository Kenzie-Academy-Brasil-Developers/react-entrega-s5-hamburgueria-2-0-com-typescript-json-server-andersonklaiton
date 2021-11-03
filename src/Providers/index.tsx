import { ReactNode } from "react";
import { CartProvider } from "./Cart";
import { ProductsProvider } from "./Products";
import { AuthProvider } from "./User";

interface ProviderProps {
  children: ReactNode;
}

const Providers = ({ children }: ProviderProps) => {
  return (
    <AuthProvider>
      <ProductsProvider>
        <CartProvider>{children}</CartProvider>
      </ProductsProvider>
    </AuthProvider>
  );
};

export default Providers;
