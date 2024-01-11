import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { COLOR } from "./utils/constants";

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
});

export default theme;
