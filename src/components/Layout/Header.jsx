import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import UserContext from '../../contexts/users/UserContext';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ThemeProvider, createTheme } from '@mui/material/styles';

export default function MenuAppBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const { user, logout } = useContext(UserContext);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    setAnchorEl(null);
    navigate('/iniciar-sesion');
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const renderDrawerList = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Inicio" />
        </ListItem>
        {user?.username ? (
          <>
            <ListItem button component={Link} to="/perfil">
              <ListItemText primary="Perfil" />
            </ListItem>
            <ListItem button onClick={handleLogout}>
              <ListItemText primary="Cerrar sesión" />
            </ListItem>
          </>
        ) : (
          <>
            <ListItem button component={Link} to="/registro">
              <ListItemText primary="Registro" />
            </ListItem>
            <ListItem button component={Link} to="/iniciar-sesion">
              <ListItemText primary="Iniciar sesión" />
            </ListItem>
          </>
        )}
      </List>
      <Divider />
    </Box>
  );

  const theme = createTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            {isSmallScreen ? (
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <>
                <MenuItem component={Link} to="/">
                  Inicio
                </MenuItem>
                {user?.username ? (
                  <>
                    <MenuItem component={Link} to="/perfil">
                      Perfil
                    </MenuItem>
                    <MenuItem onClick={handleLogout}>
                      Cerrar sesión
                    </MenuItem>
                  </>
                ) : (
                  <>
                    <MenuItem component={Link} to="/registro">
                      Registro
                    </MenuItem>
                    <MenuItem component={Link} to="/iniciar-sesion">
                      Iniciar sesión
                    </MenuItem>
                  </>
                )}
              </>
            )}

            <Typography  variant="h6"
              component={Link}
              to="/"
              sx={{ flexGrow: 1, color: 'inherit', textDecoration: 'none' }}>
              TIK TAK
            </Typography>

            {user?.username && (
              <div>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose} component={Link} to="/perfil">
                    Perfil
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>Cerrar sesión</MenuItem>
                </Menu>
              </div>

            )}
          </Toolbar>
        </AppBar>
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
          {renderDrawerList()}
        </Drawer>
      </Box>
    </ThemeProvider >
  );
}