import { default as MUIPaper } from "@mui/material/Paper";

const Paper = ({ children, ...props }) => {
  return <MUIPaper {...props}>{children}</MUIPaper>;
};

export default Paper;
