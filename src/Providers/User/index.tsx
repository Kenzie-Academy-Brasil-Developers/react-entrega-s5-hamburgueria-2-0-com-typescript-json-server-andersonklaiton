import { ReactNode } from "react";
import { History } from "history";
import { useState } from "react";
import api from "../../Services/api";
import { createContext } from "react";
import { toast } from "react-toastify";

interface AuthProps {
  children: ReactNode;
}

interface UserData {
  email: string;
  password: string;
}

interface AuthProviderData {
  token: string;
  name: string;
  id: string;
  signin: (userData: UserData, history: History) => void;
  signup: (userData: UserData, history: History) => void;
  logout: (history: History) => void;
}

export const AuthContext = createContext<AuthProviderData>(
  {} as AuthProviderData
);

export const AuthProvider = ({ children }: AuthProps) => {
  const [token, setToken] = useState<string>(
    () => localStorage.getItem("token:hamburgueria") || ""
  );

  const [id, setId] = useState<string>(
    () => localStorage.getItem("id:hamburgueira") || ""
  );

  const [name, setName] = useState<string>(
    () => localStorage.getItem("name:hamburgueria") || ""
  );

  const signin = (userdata: UserData, history: History) => {
    api
      .post("login", userdata)
      .then((response) => {
        localStorage.setItem("token:hamburgueria", response.data.accessToken);
        setToken(response.data.acessToken);
        localStorage.setItem("id:hamburgueira", response.data.user.id);
        setId(response.data.user.id);
        localStorage.setItem("name:hamburgueria", response.data.user.name);
        setName(response.data.user.name);
        history.push("/dashboard");
        toast.success(`Seja bem vindo!`);
      })
      .catch(() => toast.error("usuário não encontrado"));
  };

  const signup = (userData: UserData, history: History) => {
    api
      .post("users", userData)
      .then((_) => toast.success("Conta criada com sucesso!"))
      .then((_) => history.push("/"))
      .catch((_) => toast.error("Email já cadastrado!"));
  };

  const logout = (history: History) => {
    localStorage.clear();
    setToken("");
    setId("");
    setName("");
    history.push("/");
  };

  return (
    <AuthContext.Provider value={{ signin, signup, logout, token, id, name }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = createContext(AuthContext);
