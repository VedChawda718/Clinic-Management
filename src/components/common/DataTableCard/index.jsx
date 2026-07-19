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
  columns = [],
  renderRow,
  sx = {},
}) => {
  return (
    <Paper
      elevation={0}
      sx={(theme) => ({
        borderRadius: theme.shape.card,
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
              p: 2,
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

      {/* Dynamic Table Column Headers */}
      {columns.length > 0 && (
        <>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              p: 2,
              gap: 2,
            }}
          >
            {columns.map((col) => (
              <Typography
                key={col.key}
                variant="body2"
                color="textSecondary"
                sx={{
                  flex: 1,
                  fontWeight: 600,
                }}
              >
                {col.label}
              </Typography>
            ))}
          </Box>
          <Divider />
        </>
      )}

      {/* Items List */}
      <Box>
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
              columns={columns}
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
            padding:"12px"
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
