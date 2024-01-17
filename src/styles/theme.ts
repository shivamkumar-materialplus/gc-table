import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import { COLOR } from "utils/constants";

const theme = createTheme({
  palette: {
    primary: {
      main: COLOR.GC_GREEN_AA,
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 375,
      md: 720,
      lg: 1228,
      xl: 1920,
    },
  },
});

export default theme;
