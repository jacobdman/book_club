import { default as MUIToolbar } from "@mui/material/Toolbar";

const Toolbar = ({ children, ...props }) => {
  return <MUIToolbar {...props}>{children}</MUIToolbar>;
};

export default Toolbar;
