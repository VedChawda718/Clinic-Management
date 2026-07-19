import { Box, Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const DataTableHeader = ({
  title,
  subtitle,
  actionLabel,
  onAction,
  actionIcon = <AddIcon />,
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
        gap: 1.5,
        mb: 3,
        ...sx,
      }}
    >
      {title && (
        <Typography
          variant="h5"
          sx={(theme) => ({
            fontWeight: 700,
            color: theme.palette.primary.main,
          })}
        >
          {title}
        </Typography>
      )}

      {subtitle && (
        <Typography variant="body2" color="textSecondary">
          {subtitle}
        </Typography>
      )}

      {showAction && actionLabel && (
        <Button
          variant="contained"
          endIcon={actionIcon}
          onClick={onAction}
          sx={(theme) => ({
            borderRadius: "8px",
            px: 3,
            py: 1,
            fontWeight: 600,
            boxShadow: "none",
            "&:hover": {
              boxShadow: theme.shadows[2],
            },
          })}
        >
          {actionLabel}
        </Button>
      )}
    </Box>
  );
};

export default DataTableHeader;
