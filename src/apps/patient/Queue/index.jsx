import { useState } from "react";
import { Container, Snackbar, Alert } from "@mui/material";
import AirlineSeatReclineNormalIcon from "@mui/icons-material/AirlineSeatReclineNormal";
import queueData from "./queueData.json";
import DataTableCard from "../../../components/common/DataTableCard";
import QueueHeader from "./components/QueueHeader";

const Queue = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleJoinQueue = () => {
    setSnackbarMessage("You have successfully joined the live queue!");
    setSnackbarOpen(true);
  };

  return (
    <Container sx={{ display: "flex", flexDirection: "column", padding: "16px", gap: 1 }}>
      {/* Top Header Component */}
      <QueueHeader
        title={queueData.title}
        subtitle={queueData.subtitle}
        actionLabel={queueData.actionLabel}
        onJoin={handleJoinQueue}
      />

      {/* Main Live Queue Data Table Card rendered directly */}
      <DataTableCard
        title="Live Queue"
        headerIcon={<AirlineSeatReclineNormalIcon color="action" fontSize="small" />}
        data={queueData.queue}
        actionLabel={queueData.actionLabel}
        onAction={handleJoinQueue}
        columns={["Token No.", "Status"]}
        leftKey="tokenNo"
        rightKey="status"
        typeKey="type"
      />

      {/* Snackbar notification on joining */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={() => setSnackbarOpen(false)} severity="success" sx={{ width: "100%" }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Queue;