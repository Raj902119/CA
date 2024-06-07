import CloseIcon from '@mui/icons-material/Close'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import MenuIcon from '@mui/icons-material/Menu'
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
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import logo from './assets/CALOGO.png'
import './navbar.css'

const Navbar = () => {
  const [open, setOpen] = React.useState(false)
  const theme = useTheme()
  const navigate = useNavigate()

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const [showServicesDropdown, setShowServicesDropdown] = useState(false)
  const [showInsightsDropdown, setShowInsightsDropdown] = useState(false)

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
            <ListItemButton
              sx={{
                justifyContent: 'center',
                textAlign: 'center',
                width: '100%',
              }}
              onClick={() => navigate('/business-strategist')}
            >
              <ListItemText primary='Business Strategist' />
            </ListItemButton>
            <ListItemButton
              sx={{
                justifyContent: 'center',
                textAlign: 'center',
                width: '100%',
              }}
              onClick={() => navigate('/advisory')}
            >
              <ListItemText primary='Advisory' />
            </ListItemButton>
            <ListItemButton
              sx={{
                justifyContent: 'center',
                textAlign: 'center',
                width: '100%',
              }}
              onClick={() => navigate('/startup-funding')}
            >
              <ListItemText primary='Startup Funding' />
            </ListItemButton>
            <ListItemButton
              sx={{
                justifyContent: 'center',
                textAlign: 'center',
                width: '100%',
              }}
              onClick={() => navigate('/consultation')}
            >
              <ListItemText primary='Consultation' />
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
      <img src={logo} alt='logo' className='nav-logo' />
      <div className='nav-cont'>
        <button className='nav-title' onClick={() => navigate('/')}>
          Home
        </button>
        <button className='nav-title' onClick={toggleServicesDropdown}>
          <span style={{ display: 'flex', alignItems: 'flex-end' }}>
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
            <button
              className='dropdown-item'
              onClick={() => navigate('/services/legal')}
            >
              Consultation
            </button>
            <button
              className='dropdown-item'
              onClick={() => navigate('/services/investor')}
            >
              Business Strategist
            </button>
            <button
              className='dropdown-item'
              onClick={() => navigate('/services/ca')}
            >
              Advisory
            </button>
            <button
              className='dropdown-item'
              onClick={() => navigate('/services/startup')}
            >
              Startup
            </button>
          </div>
        )}
        <button className='nav-title' onClick={toggleInsightsDropdown}>
          <span style={{ display: 'flex', alignItems: 'flex-end' }}>
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
  )
}

export default Navbar
