import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffa726",
    },
    secondary: {
      main: "#b2ebf2",
    },
    background: {
      default: "#fff8e180",
      paper: "#fafafa",
    },
  },
  shape: {
    borderRadius: 4,
  },
  spacing: 4,
  appBarHeight: "45px",
});

const BaseThemeProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default BaseThemeProvider;
