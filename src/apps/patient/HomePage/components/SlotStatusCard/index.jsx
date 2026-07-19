import { Box, Chip, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import EventBusyIcon from "@mui/icons-material/EventBusy";

const SLOT_COLORS = {
  morning: "#D9B334",
  evening: "#8F20D9",
};

const SlotStatusCard = ({ name, timeRange, isOpen, type, status }) => {
  const isMorning = type === "morning";
  const slotColor = isMorning ? SLOT_COLORS.morning : SLOT_COLORS.evening;

  return (
    <Box
      sx={(theme) => {
        const isDark = theme.palette.mode === "dark";
        const statusPalette = isOpen ? theme.palette.success : theme.palette.error;
        const startColor = theme.palette.background.paper;
        const endColor = alpha(statusPalette.main, isDark ? 0.18 : 0.08);
        const bgGradient = `linear-gradient(135deg, ${startColor} 0%, ${endColor} 100%)`;

        return {
          position: "relative",
          borderRadius: theme.shape.borderRadius,
          padding: "16px",
          background: bgGradient,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          overflow: "hidden",
        };
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Box
            sx={{
              width: 48,
              height: 48,
              borderRadius: "50%",
              backgroundColor: alpha(slotColor, 0.08),
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {isMorning ? (
              <WbSunnyIcon sx={{ color: slotColor }} />
            ) : (
              <NightsStayIcon sx={{ color: slotColor }} />
            )}
          </Box>
          <Box>
            <Typography variant="body1">{name}</Typography>
            <Typography variant="body2" color="textSecondary">
              {timeRange}
            </Typography>
          </Box>
        </Box>
        <Chip
          label={status || (isOpen ? "Open" : "Closed")}
          size="small"
          sx={(theme) => {
            const statusPalette = isOpen ? theme.palette.success : theme.palette.error;
            return {
              backgroundColor: statusPalette.main,
              color: statusPalette.contrastText,
              fontWeight: 600,
            };
          }}
        />
      </Box>
      <Box
        sx={{
          position: "absolute",
          right: 8,
          bottom: 0,
          pointerEvents: "none",
        }}
      >
        {isOpen ? (
          <EventAvailableIcon
            sx={(theme) => ({
              fontSize: 60,
              opacity: 0.15,
              color: theme.palette.success.main,
            })}
          />
        ) : (
          <EventBusyIcon
            sx={(theme) => ({
              fontSize: 60,
              opacity: 0.15,
              color: theme.palette.error.main,
            })}
          />
        )}
      </Box>
    </Box>
  );
};

export default SlotStatusCard;
