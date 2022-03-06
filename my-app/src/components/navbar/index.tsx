import {
  Toolbar,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import DrawerComponent from "../drawer/index";

function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (

      <Toolbar>
        {isMobile && (
            <DrawerComponent />
        )
        }
      </Toolbar>
  );
}
export default Navbar;