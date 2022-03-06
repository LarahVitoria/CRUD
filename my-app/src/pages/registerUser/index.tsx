/* eslint-disable jsx-a11y/alt-text */
import { FormEvent, useState } from "react";
import React from "react";
import Navbar from "../../components/navbar";
import {
  Container,
  Form,
  Fildset,
  Vector,
  Legend,
  Title,
  Subtitle,
  ContainerInformation,
} from "./style";
import {
  Button,
  MenuItem,
  TextField,
  useTheme,
  useMediaQuery,
  CircularProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import avatarWoman from "../../assets/avatarf.svg";
import avatarMen from "../../assets/avatarm.svg";
import illustrationRegister from "../../assets/illustrationRegister.svg";
import { toastfyError, toastfySuccess } from "../../components/toast";
import { BsChevronDoubleRight } from "react-icons/bs";
import { genderList } from "../../interface";
import { headers } from "../../services/api";

const RegisterUsers = () => {
  const navigate = useNavigate();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [status] = useState("active");
  const [isLoading, setIsLoading] = useState(false);

  const RegisterUsers = (event: FormEvent, ) => {
    event.preventDefault();

    setIsLoading(true);

    const data = {
      name,
      gender,
      email,
      status,
    };
    axios
      .post("https://gorest.co.in/public/v2/users", data, {
        headers: headers,
      })
      .then(() => {
        toastfySuccess("Usuário cadastrado com sucesso!");
        setIsLoading(false);
      })
      .catch((error: any) => {
        toastfyError("Erro ao cadastrar usuário");
        console.error("There was an error!", error);
        setIsLoading(false);
      });
  };

  return (
    <>
      <Navbar />

      <Container>
        <ContainerInformation>
          <Title>Cadastre-se</Title>
          <Subtitle>
            Seja bem-vindo(a), faça seu cadastro de forma simples, fácil e
            grátis. Basta preencher os campoms com seus dados.
          </Subtitle>

          {isMobile === false && (
            <>
              <Vector>
                <img src={illustrationRegister} />
              </Vector>
              <Button
                variant="text"
                color="secondary"
                onClick={() => navigate("/listUsers")}
                endIcon={<BsChevronDoubleRight />}
              >
                Listar Usuários
              </Button>
            </>
          )}
        </ContainerInformation>

        <Form onSubmit={RegisterUsers}>
          <Fildset>
            <Legend>Cadastro de Usuários</Legend>
            {gender === "female" ? (
              <img src={avatarWoman} />
            ) : (
              <img src={avatarMen} />
            )}
            <TextField
              onChange={(e) => setName(e.target.value)}
              label="Nome"
              name="Nome"
              required
              title="Preencha este campo corretamente"
              variant="outlined"
              helperText="Nome Completo"
              type="text"
            />
            <TextField
              onChange={(e) => setEmail(e.target.value)}
              label="Email"
              name="Email"
              required
              variant="outlined"
              helperText="email@exemplo.com"
              type="email"
            />
            <TextField
              onChange={(e) => setGender(e.target.value)}
              label="Gênero"
              name="Gênero"
              required
              variant="outlined"
              select
            >
              {genderList.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <Button type="submit" variant="outlined" size="large">
              {isLoading ? <CircularProgress color="secondary" /> : "Cadastrar"}
            </Button>
          </Fildset>
        </Form>
      </Container>
    </>
  );
};

export default RegisterUsers;
