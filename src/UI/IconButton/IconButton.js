import { default as MUIIconButton } from "@mui/material/IconButton";

const IconButton = ({ children, ...props }) => {
  return <MUIIconButton {...props}>{children}</MUIIconButton>;
};

export default IconButton;
