import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import logo from './data/imgs/logo.jpg';
import { useNavigate } from 'react-router-dom';
const pages = ['Home', 'Signin', 'Our Light','Why Soldiers'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {
    const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
      setAnchorElNav(null);
      
  };



  return (
    <AppBar position="static" sx={{backgroundColor:"#2D2B6A"}}>
      <Container maxWidth="xl">
              <Toolbar disableGutters>
                  
                  {/* logo */}
        <Box
        component="img"
        sx={{
          height: 40,
            width: 40,
          paddingRight:2
          
        }}
        alt="logo"
        src={logo}
      />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Halfaya Rev
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
                      >
                          
              
                          <MenuItem onClick={() => {
                              setAnchorElNav(null);
                              navigate(`/`)
                          }}
                          >
                              <Typography textAlign="center">
                              Home
                              </Typography>
                              
                          </MenuItem>
                          <MenuItem  onClick={() => {
                              setAnchorElNav(null);
                              navigate(`/signin`)
                          }}>
                              <Typography textAlign="center">
                              Signin
                  </Typography>
                </MenuItem>
             
                <MenuItem  onClick={() => {
                              setAnchorElNav(null);
                              navigate(`/light`)
                          }}>
                              <Typography textAlign="center">
                              Our Light
                  </Typography>
                </MenuItem>
             
                <MenuItem  onClick={() => {
                              setAnchorElNav(null);
                              navigate(`/chain`)
                          }}>
                              <Typography textAlign="center">
                              Why Soldiers fall
                  </Typography>
                </MenuItem>
             
             
            </Menu>
          </Box>
         
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Halfaya Rev
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
           
              <Button
            
                onClick={() => {
                    setAnchorElNav(null);
                    navigate(`/`)
                }}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Home
                      </Button>
                      
                      <Button
            
            onClick={() => {
                setAnchorElNav(null);
                navigate(`/signin`)
            }}
            sx={{ my: 2, color: 'white', display: 'block' }}
          >
           Sign In 
                      </Button>
              
                      <Button
            
            onClick={() => {
                setAnchorElNav(null);
                navigate(`/light`)
            }}
            sx={{ my: 2, color: 'white', display: 'block' }}
          >
           Our Light 
                      </Button>
                      
                      <Button
            
            onClick={() => {
                setAnchorElNav(null);
                navigate(`/chain`)
            }}
            sx={{ my: 2, color: 'white', display: 'block' }}
          >
            Why Soldiers fall
          </Button>
          
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
