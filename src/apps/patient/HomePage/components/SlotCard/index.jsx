import { Box, Typography, Button } from "@mui/material";
import { CalendarMonth as CalendarIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import SlotStatusCard from "../SlotStatusCard";

const SlotCard = ({ data }) => {
  const navigate = useNavigate();

  if (!data) return null;

  return (
    <Box
      sx={(theme) => ({
        display:"flex",
        flexDirection:"column",
        gap: theme.spacing(1),
        borderRadius: theme.shape.card,
        background: theme.palette.background.default,
        padding: "16px",
        width:"100%",
      })}
    >
      {/* Top Header Row */}
      <Box
        sx={(theme) => ({
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        })}
      >
        <Box>
          <Typography variant="body1">
            {data.title}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {data.date}
          </Typography>
        </Box>

        <Button
          variant="outlined"
          onClick={() => navigate(data.buttonUrl || "/app/calendar")}
          endIcon={<CalendarIcon />}
        >
          {data.buttonText}
        </Button>
      </Box>

      {/* Slots List */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        {data.slots?.map((slot) => (
          <SlotStatusCard key={slot.id} {...slot} />
        ))}
      </Box>
    </Box>
  );
};

export default SlotCard;
