import { Box } from "@mui/material";
import { alpha } from "@mui/material/styles";
import DisplayLabel from "../DisplayLabel";

const getRowVariantStyles = (theme, isHighlight, isEven) => {
  const isDark = theme.palette.mode === "dark";

  if (isHighlight) {
    return {
      borderRadius: "8px",
      backgroundColor: alpha(theme.palette.primary.main, isDark ? 0.18 : 0.08),
      border: `2px solid ${theme.palette.primary.main}`,
    };
  }

  if (isEven) {
    return {
      backgroundColor: isDark ? alpha(theme.palette.common.white, 0.02) : "#f9fafb",
      borderBottom: `1px solid ${theme.palette.divider}`,
    };
  }

  return {
    borderBottom: `1px solid ${theme.palette.divider}`,
  };
};

const DataTableRow = ({
  item = {},
  isEven = false,
  onRowClick,
  columns = [],
  sx = {},
}) => {
  const isHighlight = Boolean(item.isHighlight || item.type === "ongoing" || item.type === "active");

  const hoverStyles = onRowClick
    ? {
        cursor: "pointer",
        "&:hover": {
          backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.05),
        },
      }
    : {};

  return (
    <Box
      onClick={() => onRowClick && onRowClick(item)}
      sx={(theme) => ({
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px",
        gap: 2,
        ...getRowVariantStyles(theme, isHighlight, isEven),
        ...hoverStyles,
        ...sx,
      })}
    >
      {columns.map((col) => (
        <DisplayLabel
          key={col.key}
          value={item[col.key]}
          type={col.type}
          isHighlight={isHighlight}
        />
      ))}
    </Box>
  );
};

export default DataTableRow;
