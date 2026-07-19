import { Box, Chip } from "@mui/material";

const STATUS_COLOR_MAP = {
  Open: "success",
  "On Going": "success",
  Closed: "error",
  "Up Next": "primary",
};

const StatusLabel = ({ value }) => {
  if (!value) return null;

  const color = STATUS_COLOR_MAP[value] || "default";

  return (
    <Box sx={{ flex: 1, display: "flex" }}>
      <Chip
        label={value}
        size="small"
        color={color}
      />
    </Box>
  );
};

export default StatusLabel;
