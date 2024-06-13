import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ServiceData from '../../pages/services/ServiceData'
import {
  Box,
  Button,
  Collapse,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import CloseIcon from '@mui/icons-material/Close'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import MenuIcon from '@mui/icons-material/Menu'
import InstagramIcon from '@mui/icons-material/Instagram'
import MailIcon from '@mui/icons-material/Mail'
import YouTubeIcon from '@mui/icons-material/YouTube'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import logo from './assets/CALOGO.png'
import './navbar.css'

const Navbar = () => {
  const navigate = useNavigate()

  const [open, setOpen] = useState(false)
  const [showServicesDropdown, setShowServicesDropdown] = useState(false)
  const [showInsightsDropdown, setShowInsightsDropdown] = useState(false)
  const theme = useTheme()

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const toggleServicesDropdown = () => {
    setShowServicesDropdown((prev) => !prev)
    if (showInsightsDropdown) {
      setShowInsightsDropdown(false)
    }
  }

  const toggleInsightsDropdown = () => {
    setShowInsightsDropdown((prev) => !prev)
    if (showServicesDropdown) {
      setShowServicesDropdown(false)
    }
  }

  const [openServices, setOpenServices] = React.useState(false)
  const [openInsights, setOpenInsights] = React.useState(false)

  const handleToggleServices = () => {
    setOpenServices(!openServices)
  }

  const handleToggleInsights = () => {
    setOpenInsights(!openInsights)
  }

  const DrawerList = (
    <Box sx={{ width: '50vw' }} role='presentation'>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          padding: theme.spacing(0, 1),
          ...theme.mixins.toolbar,
          justifyContent: 'flex-end',
        }}
      >
        <IconButton
          onClick={handleDrawerClose}
          sx={{
            paddingRight: '40px',
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton
            sx={{
              height: '5rem',
              paddingLeft: '40px',
              '@media (max-width:600px)': {
                paddingLeft: '20px',
              },
            }}
            onClick={handleToggleServices}
          >
            <ListItemText
              primaryTypographyProps={{
                sx: {
                  fontWeight: 'bold',
                  fontSize: '1.2rem',
                  '@media (max-width:600px)': {
                    fontSize: '0.8rem',
                  },
                },
              }}
            >
              Services
            </ListItemText>
            <ListItemIcon>
              <KeyboardArrowDownIcon />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <Collapse in={openServices} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            {Object.keys(ServiceData).map((serviceName, index) => (
              <ListItemButton
                key={index}
                sx={{
                  justifyContent: 'center',
                  textAlign: 'center',
                  width: '100%',
                }}
                onClick={() => navigate(`/services/${serviceName}`)}
              >
                <ListItemText primary={ServiceData[serviceName].headline} />
              </ListItemButton>
            ))}
          </List>
        </Collapse>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton
            sx={{
              height: '5rem',
              paddingLeft: '40px',
              '@media (max-width:600px)': {
                paddingLeft: '20px',
              },
            }}
            onClick={handleToggleInsights}
          >
            <ListItemText
              primaryTypographyProps={{
                sx: {
                  fontWeight: 'bold',
                  fontSize: '1.2rem',
                  '@media (max-width:600px)': {
                    fontSize: '0.8rem',
                  },
                },
              }}
            >
              Insights
            </ListItemText>
            <ListItemIcon>
              <KeyboardArrowDownIcon />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <Collapse in={openInsights} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            <ListItemButton
              sx={{
                justifyContent: 'center',
                textAlign: 'center',
                width: '100%',
              }}
              onClick={() => navigate('/insights/apple')}
            >
              <ListItemText primary='Apple' />
            </ListItemButton>
            <ListItemButton
              sx={{
                justifyContent: 'center',
                textAlign: 'center',
                width: '100%',
              }}
              onClick={() => navigate('/insights/ball')}
            >
              <ListItemText primary='Ball' />
            </ListItemButton>
            <ListItemButton
              sx={{
                justifyContent: 'center',
                textAlign: 'center',
                width: '100%',
              }}
              onClick={() => navigate('/insights/cat')}
            >
              <ListItemText primary='Cat' />
            </ListItemButton>
            <ListItemButton
              sx={{
                justifyContent: 'center',
                textAlign: 'center',
                width: '100%',
              }}
              onClick={() => navigate('/insights/dog')}
            >
              <ListItemText primary='Dog' />
            </ListItemButton>
          </List>
        </Collapse>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton
            sx={{
              height: '5rem',
              paddingLeft: '40px',
              '@media (max-width:600px)': {
                paddingLeft: '20px',
              },
            }}
            onClick={() => navigate('/career')}
          >
            <ListItemText
              primaryTypographyProps={{
                sx: {
                  fontWeight: 'bold',
                  fontSize: '1.2rem',
                  '@media (max-width:600px)': {
                    fontSize: '0.8rem',
                  },
                },
              }}
            >
              Career
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton
            sx={{
              height: '5rem',
              paddingLeft: '40px',
              '@media (max-width:600px)': {
                paddingLeft: '20px',
              },
            }}
            onClick={() => navigate('/gallary')}
          >
            <ListItemText
              primaryTypographyProps={{
                sx: {
                  fontWeight: 'bold',
                  fontSize: '1.2rem',
                  '@media (max-width:600px)': {
                    fontSize: '0.8rem',
                  },
                },
              }}
            >
              Gallary
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton
            sx={{
              height: '5rem',
              paddingLeft: '40px',
              '@media (max-width:600px)': {
                paddingLeft: '20px',
              },
            }}
            onClick={() => navigate('/contact')}
          >
            <ListItemText
              primaryTypographyProps={{
                sx: {
                  fontWeight: 'bold',
                  fontSize: '1.2rem',
                  '@media (max-width:600px)': {
                    fontSize: '0.8rem',
                  },
                },
              }}
            >
              Contact
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  )

  return (
    <div className='nav'>
      <div className='nav-left'>
        <img src={logo} alt='logo' className='nav-logo' />
      </div>
      <div className='nav-right'>
        <div className='nav-icons'>
          <IconButton
            href='https://www.facebook.com'
            target='_blank'
            aria-label='Facebook'
            sx={{ color: 'black' }}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            href='https://www.linkedin.com'
            target='_blank'
            aria-label='LinkedIn'
            sx={{ color: 'black' }}
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            href='https://www.instagram.com'
            target='_blank'
            aria-label='Instagram'
            sx={{ color: 'black' }}
          >
            <InstagramIcon />
          </IconButton>
          <IconButton
            href='https://www.youtube.com'
            target='_blank'
            aria-label='YouTube'
            sx={{ color: 'black' }}
          >
            <YouTubeIcon />
          </IconButton>
          <IconButton
            href='mailto:info@example.com'
            aria-label='Email'
            sx={{ color: 'black' }}
          >
            <MailIcon />
          </IconButton>
        </div>
        <div className='nav-cont'>
          <button className='nav-title' onClick={() => navigate('/')}>
            Home
          </button>
          <button className='nav-title' onClick={toggleServicesDropdown}>
            <span
              className='ser'
              style={{ display: 'flex', alignItems: 'flex-end' }}
            >
              Services
              {showServicesDropdown ? (
                <KeyboardArrowUpIcon sx={{ paddingLeft: '2px' }} />
              ) : (
                <KeyboardArrowDownIcon sx={{ paddingLeft: '2px' }} />
              )}
            </span>
          </button>
          {showServicesDropdown && (
            <div className='dropdownService'>
              {Object.keys(ServiceData).map((serviceName, index) => (
                <button
                  key={index}
                  className='dropdown-item'
                  onClick={() => navigate(`/services/${serviceName}`)}
                >
                  {ServiceData[serviceName].headline}
                </button>
              ))}
            </div>
          )}
          <button className='nav-title' onClick={toggleInsightsDropdown}>
            <span
              className='ins'
              style={{ display: 'flex', alignItems: 'flex-end' }}
            >
              Insights
              {showInsightsDropdown ? (
                <KeyboardArrowUpIcon sx={{ paddingLeft: '2px' }} />
              ) : (
                <KeyboardArrowDownIcon sx={{ paddingLeft: '2px' }} />
              )}
            </span>
          </button>
          {showInsightsDropdown && (
            <div className='dropdownInsights'>
              <button
                className='dropdown-item'
                onClick={() => navigate('/insights/apple')}
              >
                Apple
              </button>
              <button
                className='dropdown-item'
                onClick={() => navigate('/insights/ball')}
              >
                Ball
              </button>
              <button
                className='dropdown-item'
                onClick={() => navigate('/insights/cat')}
              >
                Cat
              </button>
              <button
                className='dropdown-item'
                onClick={() => navigate('/insights/dog')}
              >
                Dog
              </button>
            </div>
          )}
          <button className='nav-title' onClick={() => navigate('/career')}>
            Career
          </button>
          <button className='nav-title' onClick={() => navigate('/gallary')}>
            Gallary
          </button>
          <button className='nav-title' onClick={() => navigate('/contact')}>
            Contact
          </button>
        </div>
        <div className='menu'>
          <Button onClick={toggleDrawer(true)}>
            <MenuIcon sx={{ color: 'black', fontSize: '3rem' }} />
          </Button>
        </div>
        <Drawer
          sx={{ marginTop: '4rem', height: `calc(100% - 4rem)` }}
          anchor='right'
          open={open}
          onClose={toggleDrawer(false)}
        >
          {DrawerList}
        </Drawer>
      </div>
    </div>
  )
}

export default Navbar
