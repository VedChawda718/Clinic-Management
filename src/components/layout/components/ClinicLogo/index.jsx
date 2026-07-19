import { Box, Typography } from "@mui/material";
import HomeopathyLogo from "../../../svgIllustrations/HomeopathyLogo";
import { LogoContainer } from "./styles";

const ClinicLogo = ({ title = "Dr. Sandeep Moharir", subtitle = "Homeopathy" }) => {
  return (
    <LogoContainer>
      {/* Clinic/Doctor Icon */}
      <HomeopathyLogo />

      {/* Doctor Info */}
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="body1" color="textPrimary">
          {title}
        </Typography>
        {subtitle && (
          <Typography variant="body2" color="textSecondary">
            {subtitle}
          </Typography>
        )}
      </Box>
    </LogoContainer>
  );
};

export default ClinicLogo;
