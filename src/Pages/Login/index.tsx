import { useContext } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { AuthContext } from "../../Providers/User";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Header from "../../Components/Header";
import CardWelcome from "../../Components/CardWelcome";
import {
  BtnCad,
  Button,
  ContainerAll,
  ContainerForm,
  ContainerHeader,
  Form,
  P,
  P2,
} from "./styles";
import { TextField } from "@material-ui/core";

interface userData {
  email: string;
  password: string;
}

const Login = () => {
  const history = useHistory();
  const { signin } = useContext(AuthContext);
  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Campo Obrigatório")
      .email("Digite um e-mail válido"),
    password: yup
      .string()
      .required("Campo Obrigatório")
      .min(6, "Senha deve conter no mínimo 6 caracteres"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<userData>({ resolver: yupResolver(schema) });

  const handleForm = (data: userData) => {
    signin(data, history);
  };

  if (localStorage.getItem("token:hamburgueria")) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <ContainerAll>
      <ContainerHeader>
        <Header />
        <CardWelcome />
      </ContainerHeader>
      <ContainerForm>
        <P>Login</P>
        <Form onSubmit={handleSubmit(handleForm)}>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            id="outlined-basic"
            label="Senha"
            variant="outlined"
            type="password"
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <Button type="submit">Logar</Button>
          <div>
            <P2>
              Crie sua conta para saborear muitas delícias e matar sua fome!
            </P2>
          </div>
          <BtnCad onClick={() => history.push("/signup")}>Cadastrar</BtnCad>
        </Form>
      </ContainerForm>
    </ContainerAll>
  );
};
export default Login;
