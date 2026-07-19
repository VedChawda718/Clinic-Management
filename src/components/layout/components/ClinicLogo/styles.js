import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const LogoContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: theme.spacing(1),
}));
