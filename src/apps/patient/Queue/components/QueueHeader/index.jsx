import { Box, Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const QueueHeader = ({
  title = "Live Queue Status",
  subtitle = "Check and add yourself in the queue",
  actionLabel = "Join The Queue",
  onJoin,
  showAction = true,
  sx = {},
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        ...sx,
      }}
    >
      {title && (
        <Typography
          variant="h6"
          sx={(theme) => ({
            fontWeight: 700,
            color: theme.palette.primary.main,
          })}
        >
          {title}
        </Typography>
      )}

      {subtitle && (
        <Typography variant="caption" color="textSecondary">
          {subtitle}
        </Typography>
      )}

      {showAction && actionLabel && (
        <Button
          variant="contained"
          endIcon={<AddIcon />}
          onClick={onJoin}
          sx={(theme) => ({
            m: 1,
          })}
        >
          {actionLabel}
        </Button>
      )}
    </Box>
  );
};

export default QueueHeader;
