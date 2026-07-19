import { Box, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import MedicationLiquidIcon from "@mui/icons-material/MedicationLiquid";

const QueueStatusCard = ({ title, value, type }) => {
  const isWaiting = type === "waiting";

  return (
    <Box
      sx={(theme) => {
        const isDark = theme.palette.mode === "dark";
        const colorPalette = isWaiting
          ? theme.palette.warning
          : theme.palette.info;
        const cardColor = colorPalette.main;
        const startBg = isDark ? theme.palette.background.paper : "#ffffff";
        const bgGradient = `linear-gradient(135deg, ${startBg} 0%, ${alpha(cardColor, isDark ? 0.18 : 0.08)} 100%)`;

        return {
          flex: 1,
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
      {/* Title */}
      <Typography
        variant="body2"
        sx={(theme) => ({
          color: isWaiting
            ? theme.palette.warning.main
            : theme.palette.info.main,
        })}
      >
        {title}
      </Typography>

      {/* Value */}
      <Typography
        variant="h5"
        sx={(theme) => ({
          fontWeight: 500,
          color: isWaiting
            ? theme.palette.warning.main
            : theme.palette.info.main,
        })}
      >
        {value}
      </Typography>

      {/* Watermark Illustration */}
      <Box
        sx={{
          position: "absolute",
          right: 4,
          bottom: -18,
          pointerEvents: "none",
        }}
      >
        {isWaiting ? (
          <HourglassTopIcon
            sx={(theme) => ({
              fontSize: 60,
              opacity: 0.15,
              color: theme.palette.warning.main,
            })}
          />
        ) : (
          <MedicationLiquidIcon
            sx={(theme) => ({
              fontSize: 64,
              opacity: 0.15,
              color: theme.palette.info.main,
            })}
          />
        )}
      </Box>
    </Box>
  );
};

export default QueueStatusCard;
