import { useState } from "react";
import { Divider, Drawer, IconButton, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { Container, List, ListItem } from "./style";

function DrawerComponent() {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <Container>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/">Cadastro de Usuário</Link>
            </ListItemText>
          </ListItem>
          <Divider />
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/listUsers">Lista de Usuário</Link>
            </ListItemText>
          </ListItem>
          <Divider />
        </List>
      </Drawer>
      <IconButton color="primary" onClick={() => setOpenDrawer(!openDrawer)}>
        <AiOutlineMenu />
      </IconButton>
    </Container>
  );
}
export default DrawerComponent;