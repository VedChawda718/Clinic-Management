import { Box } from "@mui/material";
import HomeHeader from "./components/HomeHeader";
import SlotCard from "./components/SlotCard";
import QueueCard from "./components/QueueCard";
import homeData from "./homeData.json";

const HomePage = () => {
  return (
    <Box
      sx={(theme) => ({
        display:"flex",
        flexWrap: "wrap",
        gap: theme.spacing(1),
        padding: "16px",
        background: theme.palette.action.hover
      })}
    >
      <HomeHeader {...homeData.header} />
      <SlotCard data={homeData.todaySlots} />
      <QueueCard data={homeData.liveQueueStatus} />
    </Box>
  );
};

export default HomePage;