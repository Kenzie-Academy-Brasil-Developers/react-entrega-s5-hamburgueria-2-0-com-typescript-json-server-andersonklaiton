import { yupResolver } from "@hookform/resolvers/yup";
import { TextField } from "@material-ui/core";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Redirect, useHistory } from "react-router-dom";
import * as yup from "yup";
import CardWelcome from "../../Components/CardWelcome";
import Header from "../../Components/Header";
import { AuthContext } from "../../Providers/User";
import {
  BtnCad,
  ContainerAll,
  ContainerForm,
  ContainerHeader,
  DivTitle,
  Form,
  Label,
  P,
} from "./styles";

interface userData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Signup = () => {
  const { signup } = useContext(AuthContext);
  const history = useHistory();
  const schema = yup.object().shape({
    name: yup.string().required("Campo Obrigatório"),
    email: yup
      .string()
      .required("Campo Obrigatório")
      .email("Digite um e-mail válido"),
    password: yup.string().required("Campo Obrigatório"),
    confirmPassword: yup
      .string()
      .required("Campo Obrigatório")
      .oneOf([yup.ref("password"), null], "As senhas não conferem"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<userData>({ resolver: yupResolver(schema) });

  const handleForm = (data: userData) => {
    signup(data, history);
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
        <DivTitle>
          <P>Cadastrar</P>{" "}
          <Label onClick={() => history.push("/")}>Retornar para o login</Label>
        </DivTitle>
        <Form onSubmit={handleSubmit(handleForm)}>
          <TextField
            id="outlind-basic"
            label="Nome"
            variant="outlined"
            {...register("name")}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
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
          <TextField
            id="outlined-basic"
            label="Confirmar Senha"
            variant="outlined"
            type="password"
            {...register("confirmPassword")}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword?.message}
          />
          <BtnCad type="submit">Cadastrar</BtnCad>
        </Form>
      </ContainerForm>
    </ContainerAll>
  );
};
export default Signup;
