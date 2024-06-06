import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/CALOGO.png";

const Footer = () => {
  return (
    <Box component="footer" bgcolor="white" aria-labelledby="footer-heading" py={{ xs: 4, sm: 6, lg: 8 }} px={{ xs: 3, lg: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
          <Box display="flex" flexDirection="column" alignItems="center">
              <img src={logo} alt='logo' className='nav-logo' />
              <Typography variant="body2" color="textSecondary" mt={2} align="center">
              We offer a number of solutions to meet the needs of our clients such as Bussiness Strategy, Startup Funding and next generation businesses.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Grid container spacing={4}>
              <Grid item xs={6} md={3}>
                <Typography variant="subtitle1" color="primary">
                  Solutions
                </Typography>
                <Box mt={2}>
                  <Typography variant="body2" color="textSecondary" display="block" gutterBottom>
                    <Link to="#">Marketing</Link>
                  </Typography>
                  <Typography variant="body2" color="textSecondary" display="block" gutterBottom>
                    <Link to="#">Analytics</Link>
                  </Typography>
                  <Typography variant="body2" color="textSecondary" display="block" gutterBottom>
                    <Link to="#">Commerce</Link>
                  </Typography>
                  <Typography variant="body2" color="textSecondary" display="block" gutterBottom>
                    <Link to="#">Insights</Link>
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6} md={3}>
                <Typography variant="subtitle1" color="primary">
                  Support
                </Typography>
                <Box mt={2}>
                  <Typography variant="body2" color="textSecondary" display="block" gutterBottom>
                    <Link to="#">Pricing</Link>
                  </Typography>
                  <Typography variant="body2" color="textSecondary" display="block" gutterBottom>
                    <Link to="#">Documentation</Link>
                  </Typography>
                  <Typography variant="body2" color="textSecondary" display="block" gutterBottom>
                    <Link to="#">Guides</Link>
                  </Typography>
                  <Typography variant="body2" color="textSecondary" display="block" gutterBottom>
                    <Link to="#">API Status</Link>
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6} md={3}>
                <Typography variant="subtitle1" color="primary">
                  Company
                </Typography>
                <Box mt={2}>
                  <Typography variant="body2" color="textSecondary" display="block" gutterBottom>
                    <Link to="#">About</Link>
                  </Typography>
                  <Typography variant="body2" color="textSecondary" display="block" gutterBottom>
                    <Link to="#">Blog</Link>
                  </Typography>
                  <Typography variant="body2" color="textSecondary" display="block" gutterBottom>
                    <Link to="#">Jobs</Link>
                  </Typography>
                  <Typography variant="body2" color="textSecondary" display="block" gutterBottom>
                    <Link to="#">Press</Link>
                  </Typography>
                  <Typography variant="body2" color="textSecondary" display="block" gutterBottom>
                    <Link to="#">Partners</Link>
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6} md={3}>
                <Typography variant="subtitle1" color="primary">
                  Legal
                </Typography>
                <Box mt={2}>
                  <Typography variant="body2" color="textSecondary" display="block" gutterBottom>
                    <Link to="#">Claim</Link>
                  </Typography>
                  <Typography variant="body2" color="textSecondary" display="block" gutterBottom>
                    <Link to="#">Privacy</Link>
                  </Typography>
                  <Typography variant="body2" color="textSecondary" display="block" gutterBottom>
                    <Link to="#">Terms</Link>
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Box mt={6} pt={3} borderTop={1} borderColor="divider">
          <Typography variant="caption" color="textSecondary">
            &copy; 2024 CA Dhiraj Ostwal, Inc. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;