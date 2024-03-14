import Box from "UI/Box/Box";
import { useTheme } from "@mui/material";

const useStyles = (theme) => ({});

const DefaultLayout = ({ children }) => {
  const theme = useTheme();
  const styles = useStyles(theme);

  return (
    <>
      <Box>
        {/* <AdmiralAppBar /> */}
        {/* <Container sx={styles.childrenContainer} maxWidth="xl">
          {children}
        </Container> */}
        {/* {isMobile && <BottomNavBar />} */}
      </Box>
    </>
  );
};

export default DefaultLayout;
