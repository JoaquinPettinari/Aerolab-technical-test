import { createTheme } from "@mui/material/styles";
import { green } from "@mui/material/colors";

const theme = createTheme({
   palette: {
      primary: {
         main: green[500],
      },
      secondary: {
         main: "#8FA3BF",
      },
      background: {
         default: "linear-gradient(to right, tomato, cyan)",
      },
   },
});

export default theme;
