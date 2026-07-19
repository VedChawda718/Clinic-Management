import { Divider } from "@mui/material";
import ClinicLogo from "../ClinicLogo";
import doctorProfile from "./doctorProfile.json";
import { HeaderContainer } from "./styles";

const ClinicHeader = () => {
  return (
    <>
      <HeaderContainer>
        <ClinicLogo
          title={doctorProfile.doctorName}
          subtitle={doctorProfile.specialty}
        />
      </HeaderContainer>
      <Divider />
    </>
  );
};

export default ClinicHeader;
