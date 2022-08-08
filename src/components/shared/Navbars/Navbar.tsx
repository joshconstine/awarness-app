import { Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import NavbarButton from "./NavbarButton";
import { NavbarStyles } from "./NavbarStyles";
const Navbar = () => {
  return (
    <Toolbar style={NavbarStyles}>
      <NavbarButton title="Home" route="/"></NavbarButton>
      <NavbarButton title="Data" route="data"></NavbarButton>
    </Toolbar>
  );
};
export default Navbar;
