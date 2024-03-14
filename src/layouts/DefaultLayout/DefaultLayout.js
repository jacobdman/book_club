import Box from "UI/Box";
import NavBar from "components/NavBar";
import { useTheme } from "@mui/material";

const useStyles = (theme) => ({
  childrenContainer: {
    paddingTop: theme.appBarHeight,
    // paddingBottom: isMobile ? theme.paddingBelowAppBar : 0,
    maxWidth: "100vw",
    height: "calc(100vh)",
  },
});

const DefaultLayout = ({ children }) => {
  const theme = useTheme();
  const styles = useStyles(theme);

  return (
    <>
      <Box>
        <NavBar />
        <Box sx={styles.childrenContainer} maxWidth="xl">
          {children}
        </Box>
        {/* {isMobile && <BottomNavBar />} */}
      </Box>
    </>
  );
};

export default DefaultLayout;
