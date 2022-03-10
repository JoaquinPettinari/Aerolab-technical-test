import { createTheme } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";

const theme = createTheme({
   palette: {
      primary: {
         main: green[500],
      },
      secondary: {
         main: green[500],
      },
      background: {
         default: "linear-gradient(to right, tomato, cyan)",
      },
   },
});

export default theme;
