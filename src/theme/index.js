import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    // mode: "dark",
  },
  shape: {
    borderRadius: "4px",
    card: "12px",
  },
  typography: {
    fontFamily: "Montserrat, sans-serif",
    body1: {
      fontWeight: 500,
    },
    body2: {
      fontWeight: 500,
    },
    caption: {
      fontWeight:500,
    },
    button: {
      textTransform: "none",
    },
  },
});

export default theme;
