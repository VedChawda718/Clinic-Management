import { Typography, Divider, Link } from "@mui/material";
import {
  Call as CallIcon,
  Email as EmailIcon,
  LocationOn as LocationIcon,
} from "@mui/icons-material";
import ClinicLogo from "../ClinicLogo";
import footerData from "./clinicFooterData.json";
import { FooterContainer, ContactList, ContactItem, MoreInfo } from "./styles";

const contactItems = [
  { id: "phone", Icon: CallIcon, value: footerData.phone },
  { id: "email", Icon: EmailIcon, value: footerData.email },
  { id: "address", Icon: LocationIcon, value: footerData.address },
];

const ClinicFooter = () => {
  return (
    <>
    <Divider/>
    <FooterContainer component="footer">
      <ClinicLogo
        title={footerData.clinicName}
        subtitle={footerData.subtitle}
      />
      <Typography variant="body2" color="textSecondary">
        {footerData.description}
      </Typography>
      <MoreInfo>
        <ContactList>
          {contactItems.map(({ id, Icon, value }) => (
            <ContactItem key={id}>
              <Icon
                fontSize="small"
                sx={(theme) => ({ color: theme.palette.primary.main })}
              />
              <Typography variant="body2">
                {value}
              </Typography>
            </ContactItem>
          ))}
        </ContactList>
        <Divider sx={{ my: 2}} />
        <Typography
          align="center"
          variant="caption"
          color="textSecondary"
        >
          {footerData.copyrightPrefix}
          <Link
            href={footerData.designerUrl}
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
            sx={{ color: "inherit", fontWeight: 500 }}
          >
            {footerData.designerName}
          </Link>
        </Typography>
      </MoreInfo>
    </FooterContainer>
    </>
  );
};

export default ClinicFooter;
