import { Box, Typography } from "@mui/material";

const HomeHeader = ({ welcomeText, title, description }) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      {/* <Typography variant="body2" color="textSecondary">
        {welcomeText}
      </Typography> */}
      <Typography
        variant="h6"
        sx={(theme) => ({ fontWeight: 700, color: theme.palette.primary.main })}
      >
        {title}
      </Typography>
      {/* <Typography variant="body2" color="textSecondary">
        {description}
      </Typography> */}
    </Box>
  );
};

export default HomeHeader;
