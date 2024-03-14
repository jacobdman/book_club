import { default as MuiBox } from "@mui/material/Box";

const Box = ({ children, ...props }) => {
  return <MuiBox {...props}>{children}</MuiBox>;
};

export default Box;
