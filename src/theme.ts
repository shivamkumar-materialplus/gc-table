import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export const COLOR = {
  DARK_GRAY: "#313434",
  GC_GREEN_AA: "#14856B",
  LIGHT_GRAY: "#CCCCCC",
  LIGHT_GREEN: "#E1F0ED",
  NEAR_WHITE: "#F3F3F3",
  DISABLED_GRAY: "#d6d6d6",
};

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
