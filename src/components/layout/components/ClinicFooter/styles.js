import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const FooterContainer = styled(Box)(({ theme }) => ({
  padding: "16px",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
}));

export const ContactList = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
}));

export const ContactItem = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
}));

export const MoreInfo = styled(Box)(() => ({
  display: "flex",
  flexDirection:"column",
}));
