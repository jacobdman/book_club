import { default as MUIAppBar } from "@mui/material/AppBar";

const AppBar = ({ children, ...props }) => {
  return <MUIAppBar {...props}>{children}</MUIAppBar>;
};

export default AppBar;
