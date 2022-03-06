/* eslint-disable react-hooks/rules-of-hooks */
import {
  Form,
  Add,
  Fildset,
  Legend,
  Subtitle,
  Title,
  ContainerInformation,
  Vector,
} from "./style";
import {
  TableRow,
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableBody,
  styled,
  tableCellClasses,
  Button,
  IconButton,
  ButtonGroup,
  Container,
  Modal,
  TextField,
  MenuItem,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  CircularProgress,
  Tooltip,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { FormEvent, useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import avatarWoman from "../../assets/avatarf.svg";
import avatarMen from "../../assets/avatarm.svg";
import illustrationListUser from "../../assets/illustrationListUser.svg";
import { IoPersonAdd } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar";
import { toastfyError, toastfySuccess } from "../../components/toast";
import { headers } from "../../services/api";
import { genderList, statusList } from "../../interface";
import { User } from "../../interface";
import { MdDeleteForever, MdModeEdit } from "react-icons/md";
import { BsGenderFemale, BsGenderMale } from "react-icons/bs";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import { BsChevronDoubleRight } from "react-icons/bs";

const STableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#9cb4e9",
    color: "#fff",
  },
  [`&.${tableCellClasses.body}`]: {
    color: "#3D3D3D",

    borderBottom: "1px solid #9cb4e9",
  },
}));

const listUser = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [user, setUser] = useState<User[]>([]);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("active");
  const [isLoading, setIsLoading] = useState(false);

  const [modalEdit, setModalEdit] = React.useState(false);
  const [dialogDelete, setDialogDelete] = React.useState(false);

  const onDelete = (id: string) => {
    axios
      .delete(`https://gorest.co.in/public/v2/users/${id}`, {
        headers: headers,
      })
      .then(() => {
        listUsers();
        handleCloseDialog();
        toastfySuccess("Usuário excluido com sucesso!");
      })
      .catch((error) => {
        toastfyError("Erro ao excluir usuário.");
        console.error("There was an error!", error);
      });
  };

  function openModalAndSelectUser(id: number) {
    setModalEdit(true);

    axios
      .get(`https://gorest.co.in/public/v2/users/${id}`, {
        headers: headers,
      })
      .then((response) => {
        setId(response.data.id);
        setName(response.data.name);
        setEmail(response.data.email);
        setGender(response.data.gender);
      });
  }
  const openDialogDelete = (id: number) => {
    setDialogDelete(true);
    setId(String(id));
  };
  const handleCloseModal = () => setModalEdit(false);
  const handleCloseDialog = () => setDialogDelete(false);

  const listUsers = () => {
    axios
      .get(`https://gorest.co.in/public/v2/users`, {
        headers: headers,
      })
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        toastfyError("Erro ao listar usuários.");
        console.error("There was an error!", error);
      });
  };

  const updateUsers = (event: FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    const data = {
      name,
      gender,
      email,
      status,
    };
    axios
      .put(`https://gorest.co.in/public/v2/users/${id}`, data, {
        headers: headers,
      })
      .then(() => {
        toastfySuccess("Usuário editado com sucesso!");
        setIsLoading(false);
        handleCloseModal();
        listUsers();
      })
      .catch((error: any) => {
        toastfyError("Erro ao editar usuário.");
        console.error("There was an error!", error);
        setIsLoading(false);
        handleCloseModal();
      });
  };

  useEffect(() => {
    listUsers();
  }, []);

  return (
    <Container maxWidth="lg">
      <Navbar />

      <ContainerInformation>
        <div>
          <Title>Listagem de Usuários</Title>
          <Subtitle>
            Aqui você pode ver os usuáris cadastrados, caso precise pode estar
            editando e/ou excluindo um usário.
          </Subtitle>
        </div>
        {isMobile === false && (
          <div>
            <Vector>
              <img src={illustrationListUser} />
            </Vector>
            <Button
              variant="text"
              color="secondary"
              onClick={() => navigate("/")}
              endIcon={<BsChevronDoubleRight />}
            >
              Cadastro de Usuários
            </Button>
          </div>
        )}
      </ContainerInformation>

      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <STableCell align="center">ID</STableCell>
              <STableCell align="center">Nome</STableCell>
              <STableCell align="center">Email</STableCell>
              <STableCell align="center">Gênero</STableCell>
              <STableCell align="center">Status</STableCell>
              <STableCell align="center">Opções</STableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {user.map((data) => {
              return (
                <TableRow hover role="checkbox" key={data.id} tabIndex={-1}>
                  <STableCell align="center">{data.id}</STableCell>
                  <STableCell align="center">{data.name}</STableCell>
                  <STableCell align="center">{data.email}</STableCell>
                  <STableCell align="center">
                    {data.gender === "female" ? (
                      <BsGenderFemale />
                    ) : (
                      <BsGenderMale />
                    )}
                  </STableCell>
                  <STableCell align="center">
                    {data.status === "active" ? (
                      <AiOutlineCheck color="primary" />
                    ) : (
                      <AiOutlineClose />
                    )}
                  </STableCell>
                  <STableCell align="center">
                    <ButtonGroup variant="text" aria-label="text button group">
                      <Tooltip title="Editar Usuário">
                        <IconButton
                          color="warning"
                          onClick={() => openModalAndSelectUser(data.id)}
                        >
                          <MdModeEdit />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Deletar Usuário">
                        <IconButton
                          color="error"
                          onClick={() => openDialogDelete(data.id)}
                        >
                          <MdDeleteForever />
                        </IconButton>
                      </Tooltip>
                    </ButtonGroup>
                  </STableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: "10px",
        }}
        open={modalEdit}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        
        <Form onSubmit={updateUsers}>
        {isMobile === true && (
          <IconButton color="primary" onClick={handleCloseModal}>
            <AiOutlineClose />
          </IconButton>
        )}
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
              value={name}
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
              value={email}
              required
              variant="outlined"
              helperText="email@exemplo.com"
              type="email"
            />
            <TextField
              onChange={(e) => setGender(e.target.value)}
              label="Gênero"
              name="Gênero"
              value={gender}
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

            <TextField
              onChange={(e) => setStatus(e.target.value)}
              label="Status"
              name="Status"
              value={status}
              required
              variant="outlined"
              select
            >
              {statusList.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <Button type="submit" variant="outlined" size="large">
              {isLoading ? <CircularProgress color="secondary" /> : "Editar"}
            </Button>
          </Fildset>
        </Form>
      </Modal>

      <Dialog open={dialogDelete} onClose={handleCloseDialog}>
        <DialogContent style={{ display: "flex", alignItems: "center" }}>
          <DialogContentText>
            Deseja realmente excluir este usuário?
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleCloseDialog}
          >
            Não
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => onDelete(id)}
          >
            Sim
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default listUser;
