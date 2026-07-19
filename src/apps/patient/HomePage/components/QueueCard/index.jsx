import { Box, Typography, Button } from "@mui/material";
import { NorthEast as ArrowIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import QueueStatusCard from "../QueueStatusCard";

const QueueCard = ({ data }) => {
  const navigate = useNavigate();

  if (!data) return null;

  return (
    <Box
      sx={(theme) => ({
        width: "100%",
        borderRadius: theme.shape.card,
        background: theme.palette.background.default,
        padding: "16px",
        display:"flex",
        flexDirection:"column",
        gap: 1
      })}
    >
      <Box
        sx={(theme) => ({
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        })}
      >
        <Box>
          <Typography variant="body1">{data.title}</Typography>
          <Typography variant="body2" color="textSecondary">
            {data.activeSlot}
          </Typography>
        </Box>

        <Button
          variant="contained"
          onClick={() => navigate(data.buttonUrl || "/app/queue")}
          endIcon={<ArrowIcon />}
        >
          {data.buttonText}
        </Button>
      </Box>

      {/* Queue Stat Cards Row */}
      <Box
        sx={{
          display: "flex",
          gap: 1,
        }}
      >
        {data.queueItems?.map((item) => (
          <QueueStatusCard key={item.id} {...item} />
        ))}
      </Box>
    </Box>
  );
};

export default QueueCard;
