import { useState } from "react";
import {
  Box,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import calendarData from "./calendarData.json";
import DataTableCard from "../../../components/common/DataTableCard";

const Calendar = () => {
  const [selectedMonth, setSelectedMonth] = useState(calendarData.defaultMonth);

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  return (
    <Container sx={{p: 2}}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h6"
          sx={(theme) => ({
            fontWeight: 700,
            color: theme.palette.primary.main,
          })}
        >
          {calendarData.title}
        </Typography>

        <Typography variant="caption" color="textSecondary">
          {calendarData.subtitle}
        </Typography>
        <Box sx={{width:"100%", p:2}}>
        <FormControl fullWidth size="small" >
          <InputLabel id="month-select-label">Month</InputLabel>
          <Select
            labelId="month-select-label"
            id="month-select"
            value={selectedMonth}
            label="Month"
            onChange={handleMonthChange}
          >
            {calendarData.months.map((month) => (
              <MenuItem key={month} value={month}>
                {month}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        </Box>
      </Box>

      {/* Main Schedule Data Table Card */}
      <DataTableCard
        title={`${selectedMonth}, ${calendarData.year}`}
        headerIcon={<CalendarMonthIcon color="action" />}
        data={calendarData.schedule}
        columns={calendarData.columns}
        showAction={false}
      />
    </Container>
  );
};

export default Calendar;