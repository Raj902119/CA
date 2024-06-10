import React from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  IconButton,
  Container,
  styled,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link } from "react-router-dom";

const iconColor = "#686D76";

const RootBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#31363F",
  color: iconColor,
  padding: theme.spacing(4),
}));

const HeadingTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  color: "white",
  marginBottom: theme.spacing(2),
}));

const ContactItemBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginBottom: theme.spacing(1),
}));

const IconButtonStyled = styled(IconButton)(({ theme }) => ({
  marginRight: theme.spacing(1),
  color: iconColor,
}));

const FormStyled = styled("form")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
}));

const InputStyled = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: iconColor,
    },
    "&:hover fieldset": {
      borderColor: iconColor,
    },
    "&.Mui-focused fieldset": {
      borderColor: iconColor,
    },
  },
  "& .MuiInputBase-input": {
    color: iconColor,
  },
  "& .MuiInputLabel-outlined": {
    color: iconColor,
  },
  "& .MuiInputLabel-outlined.Mui-focused": {
    color: iconColor,
  },
}));

const MapImage = styled("img")(({ theme }) => ({
  width: "100%",
  maxWidth: 400,
}));

const CustomButton = styled(Button)(({ theme }) => ({
  color: iconColor,
  borderColor: iconColor,
  marginBottom: theme.spacing(1),
  "&:hover": {
    borderColor: iconColor,
  },
}));

const Footer = () => {
  return (
    <RootBox>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <HeadingTypography variant="h6">CONTACT US</HeadingTypography>
            <Box>
              <ContactItemBox>
                <IconButtonStyled>
                  <LocationOnIcon />
                </IconButtonStyled>
                <Typography>
                  2nd Floor, Shree Krishna, 7, Opp Kiosk Koffee, Shirole Road,
                  off Fergusson College Road, Pune, Maharashtra 411004
                </Typography>
              </ContactItemBox>
              <ContactItemBox>
                <IconButtonStyled>
                  <CallIcon />
                </IconButtonStyled>
                <Typography>+91 70200 45454</Typography>
              </ContactItemBox>
              <ContactItemBox>
                <IconButtonStyled>
                  <TwitterIcon />
                </IconButtonStyled>
                <Typography>Twitter</Typography>
              </ContactItemBox>
              <ContactItemBox>
                <IconButtonStyled>
                  <FacebookIcon />
                </IconButtonStyled>
                <Typography>Facebook</Typography>
              </ContactItemBox>
              <ContactItemBox>
                <IconButtonStyled>
                  <LinkedInIcon />
                </IconButtonStyled>
                <Typography>LinkedIn</Typography>
              </ContactItemBox>
              <ContactItemBox>
                <IconButtonStyled>
                  <YouTubeIcon />
                </IconButtonStyled>
                <Typography>YouTube</Typography>
              </ContactItemBox>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <HeadingTypography variant="h6">LINKS</HeadingTypography>
            <Box>
              <CustomButton variant="outlined" fullWidth>
                Bussiness Registration
              </CustomButton>
              <CustomButton variant="outlined" fullWidth>
                Company Formation
              </CustomButton>
              <CustomButton variant="outlined" fullWidth>
                Audit &amp; Assurance
              </CustomButton>
              <CustomButton variant="outlined" fullWidth>
                Taxation
              </CustomButton>
              <CustomButton variant="outlined" fullWidth>
                Corporate Laws
              </CustomButton>
              <CustomButton variant="outlined" fullWidth>
                Consultancy
              </CustomButton>
              <CustomButton variant="outlined" fullWidth>
                NRI Tax and Allied Services
              </CustomButton>
              <CustomButton variant="outlined" fullWidth>
                About Us
              </CustomButton>
              <CustomButton variant="outlined" fullWidth>
                Careers
              </CustomButton>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <HeadingTypography variant="h6">GET IN TOUCH</HeadingTypography>
            <FormStyled>
              <InputStyled label="Name" variant="outlined" />
              <InputStyled label="Phone" variant="outlined" type="tel" />
              <InputStyled label="Email" variant="outlined" type="email" />
              <InputStyled
                label="Message"
                variant="outlined"
                multiline
                rows={4}
              />
              <Button variant="contained" type="submit" sx={{ backgroundColor: iconColor }}>
                Submit
              </Button>
            </FormStyled>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <HeadingTypography variant="h6">MAP LOCATION</HeadingTypography>
            <Link to={"https://maps.app.goo.gl/3LnJDgNw6Y72QRco8"} >
            <MapImage src="../../public/assets/map.png" alt="Map" />
            </Link>
          </Grid>
        </Grid>
      </Container>
    </RootBox>
  );
};

export default Footer;
