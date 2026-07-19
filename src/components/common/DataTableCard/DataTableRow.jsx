import { Box, Chip, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";

const DataTableRow = ({
  item = {},
  isEven = false,
  onRowClick,
  leftKey = "tokenNo",
  rightKey = "status",
  typeKey = "type",
  sx = {},
}) => {
  const type = item[typeKey] || item.type;
  const isOngoing = type === "ongoing" || type === "active";
  const isUpNext = type === "up_next" || type === "next";

  const leftValue = item[leftKey] || item.tokenNo || item.title || item.name;
  const rightValue = item[rightKey] || item.status;

  return (
    <Box
      onClick={() => onRowClick && onRowClick(item)}
      sx={(theme) => {
        const isDark = theme.palette.mode === "dark";

        let baseStyles = {};
        if (isOngoing) {
          baseStyles = {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "14px 20px",
            borderRadius: "8px",
            backgroundColor: isDark
              ? alpha(theme.palette.primary.main, 0.18)
              : alpha(theme.palette.primary.main, 0.08),
            border: `1.5px solid ${theme.palette.primary.main}`,
            my: 0.5,
          };
        } else {
          baseStyles = {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "14px 20px",
            backgroundColor: isEven
              ? isDark
                ? alpha(theme.palette.common.white, 0.02)
                : "#f9fafb"
              : "transparent",
            borderBottom: `1px solid ${theme.palette.divider}`,
          };
        }

        if (onRowClick) {
          baseStyles.cursor = "pointer";
          baseStyles["&:hover"] = {
            backgroundColor: alpha(theme.palette.primary.main, 0.05),
          };
        }

        return { ...baseStyles, ...sx };
      }}
    >
      {/* Left Column Value */}
      <Typography
        variant="body1"
        sx={{
          fontWeight: isOngoing || isUpNext ? 700 : 500,
        }}
      >
        {leftValue}
      </Typography>

      {/* Right Column Status / Value */}
      {rightValue && (
        <Chip
          label={rightValue}
          size="small"
          sx={(theme) => {
            if (isOngoing) {
              return {
                backgroundColor: theme.palette.success.main,
                color: theme.palette.success.contrastText,
                fontWeight: 700,
                fontSize: "0.8rem",
                px: 1,
                borderRadius: "16px",
              };
            }
            if (isUpNext) {
              return {
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.primary.contrastText,
                fontWeight: 700,
                fontSize: "0.8rem",
                px: 1,
                borderRadius: "16px",
              };
            }
            return {
              backgroundColor:
                theme.palette.mode === "dark"
                  ? alpha(theme.palette.common.white, 0.1)
                  : "#e0e0e0",
              color: theme.palette.text.secondary,
              fontWeight: 500,
              fontSize: "0.8rem",
              px: 1,
              borderRadius: "16px",
            };
          }}
        />
      )}
    </Box>
  );
};

export default DataTableRow;
