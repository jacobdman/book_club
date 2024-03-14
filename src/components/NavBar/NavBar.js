import { useState } from "react";
import Box from "UI/Box";
import AppBar from "UI/AppBar";
import Toolbar from "UI/Toolbar";
import IconButton from "UI/IconButton";
import Typography from "UI/Typography";
import Drawer from "UI/Drawer";
import Button from "UI/Button";
import MenuIcon from "@mui/icons-material/Menu";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { useTheme } from "@mui/material";

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

const NavBar = ({ window }) => {
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box>
      <AppBar
        component="nav"
        color="secondary"
        sx={{
          height: theme.appBarHeight,
          display: "flex",
          // alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
            }}
          >
            Book Club
            <AutoStoriesIcon sx={{ marginLeft: 2 }} />
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{ color: theme.palette.secondary.contrastText }}
              >
                {item}
              </Button>
            ))}
            <Button variant="contained">Login</Button>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Typography variant="h6" sx={{ my: 2 }}>
              Book Club
              <AutoStoriesIcon sx={{ marginLeft: 2 }} />
            </Typography>
            {/* <Divider />
            <List>
              {navItems.map((item) => (
                <ListItem key={item} disablePadding>
                  <ListItemButton sx={{ textAlign: "center" }}>
                    <ListItemText primary={item} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List> */}
          </Box>
        </Drawer>
      </nav>
    </Box>
  );
};

export default NavBar;
