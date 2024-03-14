import { default as MUIButton } from "@mui/material/Button";

const Button = ({ children, ...props }) => {
  return <MUIButton {...props}>{children}</MUIButton>;
};

export default Button;
