import { Typography } from "@mui/material";

const DateLabel = ({ value, isHighlight = false }) => {
  return (
    <Typography
      variant="body2"
      sx={{
        flex: 1,
        fontWeight: isHighlight ? 600 : 500,
      }}
    >
      {value}
    </Typography>
  );
};

export default DateLabel;
