import { default as MUITypography } from "@mui/material/Typography";

const Typography = ({ children, ...props }) => {
  return <MUITypography {...props}>{children}</MUITypography>;
};

export default Typography;
