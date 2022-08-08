import { Button } from "@mui/material";
import { Link } from "react-router-dom";

type NavbarButtonProps = {
  title: string;
  route: string;
};

const NavbarButton = (props: NavbarButtonProps) => {
  const { title, route } = props;
  return (
    <Link to={route}>
      <Button>{title}</Button>;
    </Link>
  );
};

export default NavbarButton;
