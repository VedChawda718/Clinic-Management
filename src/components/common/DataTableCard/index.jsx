import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DataTableRow from "./DataTableRow";
import DataTableHeader from "./DataTableHeader";

const DataTableCard = ({
  title,
  data = [],
  actionLabel,
  onAction,
  actionIcon = <AddIcon />,
  showAction = true,
  onRowClick,
  headerIcon,
  columns = ["Token No.", "Status"],
  leftKey = "tokenNo",
  rightKey = "status",
  typeKey = "type",
  renderRow,
  sx = {},
}) => {
  const leftColLabel = Array.isArray(columns) ? columns[0] : "Token No.";
  const rightColLabel = Array.isArray(columns) ? columns[1] : "Status";

  return (
    <Paper
      elevation={0}
      sx={(theme) => ({
        borderRadius: "16px",
        border: `1px solid ${theme.palette.divider}`,
        overflow: "hidden",
        backgroundColor: theme.palette.background.paper,
        ...sx,
      })}
    >
      {/* Card Header Row */}
      {title && (
        <>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              px: 2.5,
              py: 2,
            }}
          >
            <Typography variant="body2" sx={{ fontWeight: 600 }}>
              {title}
            </Typography>

            {headerIcon}
          </Box>
          <Divider />
        </>
      )}

      {/* Table Column Headers */}
      {columns && columns.length > 0 && (
        <>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              px: 2.5,
              py: 1.5,
            }}
          >
            <Typography
              variant="subtitle2"
              color="textSecondary"
              sx={{ fontWeight: 600 }}
            >
              {leftColLabel}
            </Typography>
            <Typography
              variant="subtitle2"
              color="textSecondary"
              sx={{ fontWeight: 600 }}
            >
              {rightColLabel}
            </Typography>
          </Box>
          <Divider />
        </>
      )}

      {/* Items List */}
      <Box sx={{ px: 1, py: 1 }}>
        {data.map((item, index) => {
          if (renderRow) {
            return renderRow(item, index);
          }
          return (
            <DataTableRow
              key={item.id || index}
              item={item}
              isEven={index % 2 === 1}
              onRowClick={onRowClick}
              leftKey={leftKey}
              rightKey={rightKey}
              typeKey={typeKey}
            />
          );
        })}
      </Box>

      {/* Bottom Full-Width Action Button */}
      {showAction && actionLabel && (
        <Button
          fullWidth
          variant="contained"
          endIcon={actionIcon}
          onClick={onAction}
          sx={{
            borderRadius: 0,
            py: 1.8,
            fontWeight: 600,
            fontSize: "1rem",
            boxShadow: "none",
          }}
        >
          {actionLabel}
        </Button>
      )}
    </Paper>
  );
};

export { DataTableHeader, DataTableRow };
export default DataTableCard;
