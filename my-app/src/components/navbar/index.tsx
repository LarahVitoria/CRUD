import {
  AppBar,
  Toolbar,
  CssBaseline,
  useTheme,
  useMediaQuery,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";
import DrawerComponent from "../drawer/index";
import { Item, Styled } from "./style";



function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));


  return (
    // <AppBar position="sticky" style={{ marginBottom: '1rem' }} color="secondary">
    //   <CssBaseline />
      <Toolbar>
        {isMobile && (
            <DrawerComponent />
        )
        }
      </Toolbar>
    // </AppBar>


  );
}
export default Navbar;