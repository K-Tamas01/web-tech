import { Outlet } from "react-router-dom";
import { Fragment, useContext, useState } from "react";
import { Link } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import BuildIcon from '@mui/icons-material/Build';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MovieIcon from '@mui/icons-material/Movie';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import HomeIcon from '@mui/icons-material/Home';
import PublishIcon from '@mui/icons-material/Publish';


import { UserContext } from '../../Context/user.context';

const Navigation = () =>{
    const { user, setUser } = useContext(UserContext);
    const [openDrawer, setOpenDrawer] = useState(false);
    const [anchorMenu, setAnchorMenu] = useState(null);

    const toggleDrawer = (open) => (event) => {
      if (
        event.type === 'keydown' &&
        (event.key === 'Tab' || event.key === 'Shift')
      ) {
        return;
      }
  
      setOpenDrawer(open);
    };

    const menulogout = () => {
      closeMenu();
      setUser({name: undefined, email: undefined, id: undefined});
    }

    const drawerlogout = () => {
      toggleDrawer(false);
      setUser({name: undefined, email: undefined, id: undefined});
    }
  
    const toggleMenu = (event) => {
      setAnchorMenu(event.currentTarget);
    };
  
    const closeMenu = () => {
      setAnchorMenu(null);
    };
    
    return(
      <Fragment>
        <div>
          <AppBar position="static">
            <Toolbar>
              <IconButton edge="start" color="inherit" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
              <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
                <Typography variant="h6">Mozi Kereső</Typography>
              </Link>
              <div style={{ flexGrow: 1 }} />
                <IconButton color="inherit" onClick={toggleMenu}>
                  <AccountCircle />
                </IconButton>
                <Menu anchorEl={anchorMenu} open={Boolean(anchorMenu)} onClose={closeMenu}>
                  {user.id ? (<div><MenuItem onClick={closeMenu} component={Link} to="/Options"><BuildIcon fontSize='small'/>&nbsp;Fiók</MenuItem><MenuItem onClick={menulogout} component={Link} to="/Films-form"><PublishIcon fontSize='small'/>&nbsp;Film felvétel</MenuItem><MenuItem onClick={menulogout} component={Link} to="/"><LogoutIcon fontSize='small'/>&nbsp;Kiejelentkezés</MenuItem></div>) : 
                  (<MenuItem onClick={closeMenu} component={Link} to="/Auth"><LoginIcon fontSize='small'/>&nbsp;Bejelentkezés</MenuItem>)}
                </Menu>
            </Toolbar>
          </AppBar>
          <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer(false)}>
            <List>
              <ListItem button component={Link} to="/" onClick={toggleDrawer(false)}>
                <ListItemIcon>
                  <HomeIcon fontSize='small'/>
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem button component={Link} to="/Vetítés" onClick={toggleDrawer(false)}>
                <ListItemIcon>
                  <LocalMoviesIcon fontSize='small'/>
                </ListItemIcon>
                <ListItemText primary="Vetítések" />
              </ListItem>
              <ListItem button component={Link} to="/Mozi" onClick={toggleDrawer(false)}>
                <ListItemIcon>
                  <MovieIcon fontSize='small'/>
                </ListItemIcon>
                <ListItemText primary="Mozik" />
              </ListItem>
              {user.id ? ( <div>
                <ListItem button component={Link} to="/Films-form" onClick={toggleDrawer(false)}>
                <ListItemIcon>
                  <PublishIcon fontSize='small'/>
                </ListItemIcon>
                <ListItemText primary="Film felvétel" />
              </ListItem>
              <ListItem button component={Link} to="/Options" onClick={toggleDrawer(false)}>
                <ListItemIcon>
                  <BuildIcon fontSize='small'/>
                </ListItemIcon>
                <ListItemText primary="Fiók" />
              </ListItem>
              <ListItem button component={Link} to="/" onClick={drawerlogout}>
                <ListItemIcon>
                  <LogoutIcon fontSize='small'/>
                </ListItemIcon>
                <ListItemText primary="Kijelentkezés" />
              </ListItem>
              </div>):(
                <ListItem button component={Link} to="/Auth" onClick={toggleDrawer(false)}>
                <ListItemIcon>
                  <LoginIcon fontSize='small'/>
                </ListItemIcon>
                <ListItemText primary="Bejelentkezés" />
              </ListItem>
              )}
            </List>
          </Drawer>
        </div>
        <Outlet />
      </Fragment>
    )
  }
  
  export default Navigation;