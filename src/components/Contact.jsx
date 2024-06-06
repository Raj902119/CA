import React from 'react';
import { Container, Typography, Grid, Paper, TextField, Button, Box, IconButton } from '@mui/material';
import { Email, Home, Phone } from '@mui/icons-material';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/Twitter'; // Adjusted to match Twitter's icon import
import FacebookIcon from '@mui/icons-material/Facebook';

const Contact = () => {
  return (
    <Box bgcolor="white" color="text.primary" py={3} >
      <Container>
      <Box alignItems="center" ml={2}>
      <Typography variant="h4" color="black">
          Contact us
        </Typography>
      </Box>
        <Grid container spacing={4} mt={2}>
          <Grid item xs={12} lg={6}>
            <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
                <Box display="flex" alignItems="center">
                  <IconButton href="mailto:cadhirajostwal@gmail.com" color="primary">
                    <Email />
                  </IconButton>
                  <Box ml={2}>
                    <Typography variant="subtitle1">Email</Typography>
                    <Typography variant="body2" color="textSecondary">Contact our team via email.</Typography>
                    <Typography variant="body2" color="primary">cadhirajostwal@gmail.com</Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Box display="flex" alignItems="center">
                  <IconButton href="https://www.instagram.com/cadhirajostwal" color="primary" target="_blank">
                    <InstagramIcon />
                  </IconButton>
                  <Box ml={2}>
                    <Typography variant="subtitle1">Instagram</Typography>
                    <Typography variant="body2" color="textSecondary">Follow us on Instagram for updates.</Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Box display="flex" alignItems="center">
                  <IconButton href="https://www.youtube.com/@CADhirajOstwal" color="primary" target="_blank">
                    <YouTubeIcon />
                  </IconButton>
                  <Box ml={2}>
                    <Typography variant="subtitle1">YouTube</Typography>
                    <Typography variant="body2" color="textSecondary">Check out our videos on YouTube.</Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Box display="flex" alignItems="center">
                  <IconButton href="https://www.linkedin.com/in/cadhirajostwal" color="primary" target="_blank">
                    <LinkedInIcon />
                  </IconButton>
                  <Box ml={2}>
                    <Typography variant="subtitle1">LinkedIn</Typography>
                    <Typography variant="body2" color="textSecondary">Connect with us on LinkedIn.</Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Box display="flex" alignItems="center">
                  <IconButton href="https://x.com/cadhirajostwal" color="primary" target="_blank">
                    <XIcon />
                  </IconButton>
                  <Box ml={2}>
                    <Typography variant="subtitle1">X</Typography>
                    <Typography variant="body2" color="textSecondary">Follow us on Twitter for updates.</Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Box display="flex" alignItems="center">
                  <IconButton href="https://www.facebook.com/dhiraj.ostwal" color="primary" target="_blank">
                    <FacebookIcon />
                  </IconButton>
                  <Box ml={2}>
                    <Typography variant="subtitle1">Facebook</Typography>
                    <Typography variant="body2" color="textSecondary">Connect with us on Facebook.</Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Box display="flex" alignItems="center">
                  <Home color="primary" />
                  <Box ml={2}>
                    <Typography variant="subtitle1">Office</Typography>
                    <Typography variant="body2" color="textSecondary">Come say hello at our office HQ.</Typography>
                    <Typography variant="body2" color="primary">
                      2nd Floor, Shree Krishna, 7, Opp Kiosk Koffee, Shirole Road, off Fergusson College Road, Pune, Maharashtra 411004
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Box display="flex" alignItems="center">
                  <Phone color="primary" />
                  <Box ml={2}>
                    <Typography variant="subtitle1">Phone</Typography>
                    <Typography variant="body2" color="textSecondary">Mon-Fri from 8am to 5pm.</Typography>
                    <Typography variant="body2" color="primary">+1 (555) 000-0000</Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} lg={6}>
            <Paper elevation={3} sx={{ p: 4, bgcolor: 'grey.100' }}>
              <form>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="First Name"
                      placeholder="John"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Last Name"
                      placeholder="Doe"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Email address"
                      placeholder="johndoe@example.com"
                      variant="outlined"
                      type="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      placeholder="Message"
                      variant="outlined"
                      multiline
                      rows={4}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      fullWidth
                      variant="contained"
                      color="primary"
                      size="large"
                      type="submit"
                    >
                      Send message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;


