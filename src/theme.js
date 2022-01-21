import { createTheme } from "@mui/material/styles";
import { green, lightGreen } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: green[700],
    },
    secondary: {
      main: lightGreen[900],
    },
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: ['"Lato"', "sans-serif"].join(","),
  },
});

export default theme;
