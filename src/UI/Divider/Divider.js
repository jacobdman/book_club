import { default as MUIDivider } from "@mui/material/Divider";

const Divider = ({ children, ...props }) => {
  return <MUIDivider {...props}>{children}</MUIDivider>;
};

export default Divider;
