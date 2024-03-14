import { default as MUIDrawer } from "@mui/material/Drawer";

const Drawer = ({ children, ...props }) => {
  return <MUIDrawer {...props}>{children}</MUIDrawer>;
};

export default Drawer;
