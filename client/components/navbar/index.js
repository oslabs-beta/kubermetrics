import React, { useState } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import NavRoutes from '../NavRoutes/index.js';
import HomePage from '../../pages/home/index.js'
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';

// import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/core/styles';
// import {
//   AppBar,
//   CssBaseline,
//   Divider,
//   Hidden,
//   Toolbar,
//   Typography,
//   IconButton,
//   Drawer,
//   MenuList,
//   MenuItem,
//   List,
//   ListItem,
//   ListItemText,
//  } from '@material-ui/core';
// import MenuIcon from '@material-ui/icons/Menu';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({

    root: {
      // flexGrow: 1,
      display: 'flex',
    },
    // title: {
    //   flexGrow: 1,
    // },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexsShrink: 0,
      },
    },
    appBar: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    // fullList: {
    //   width: 'auto',
    // },
  }));

function NavBar(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  // const [isOpen, setIsOpen] = useState(false);
  // const toggleDrawer = (open) => (
  //   event
  // ) => {
  //   if (
  //     event.type === 'keydown' &&
  //     ((event).key === 'Tab' ||
  //       (event).key === 'Shift')
  //   ) {
  //     return;
  //   }

  //   setIsOpen(open);
  // };
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };




  const activeRoute = (routeName) => {
    return props.location.pathname === routeName ? true : false;
  }


  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {NavRoutes.map((prop, key) => {
          return (
              <ListItem button key={key}>
                <NavLink to={prop.path} style={{ textDecoration: 'none' }} key={key}>
                  <ListItemText primary={prop.sidebarName} />
                </NavLink>
              </ListItem>
          );
        })}
      </List>
    </div>
  );

  const container = window !== undefined  ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open draawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" noWrap>
            Your Kashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            // ModalProps={{
            //   keepMounted: true,
            // }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      {/* <main className={classes.content}>
        <div className={classes.toolbar} />
        {/* <Typography paragraph> */}
        {/* <HomePage /> */}
        {/* </Typography> */}

      {/* </main> */}
    </div>
  );
}


{/*

//   return (
//     <div>
//       <div className={classes.root}>
//         <AppBar position="static">
//           <Toolbar>
//             <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
//               <MenuIcon />
//             </IconButton>
//             <Typography variant="h5" className={classes.title}>
//                 Kashboard
//             </Typography>ç
//           </Toolbar>
//         </AppBar>
//       </div>
//       <Drawer classes={{ paper: classes.drawer }} open={isOpen} onClose={toggleDrawer(false)}>
//         <div */}
{/* //           className={classes.fullList}
//           role="presentation"
//           onClick={toggleDrawer(false)}
//           onKeyDown={toggleDrawer(false)}
//         >
//           <MenuList>
//             {NavRoutes.map((prop, key) => { */}
{/* //               return (
//                 <NavLink to={prop.path} style={{ textDecoration: 'none' }} key={key}>
//                   <MenuItem selected={activeRoute(prop.path)}>
//                     <ListItemText primary={prop.sidebarName} />
//                   </MenuItem>
//                 </NavLink>
//               );
//             })}
//           </MenuList> */}
{/* //         </div> */}
{/* //       </Drawer> */}
{/* //      </div> */}
{/* //   ); */}
{/* // }; */}

export default withRouter(NavBar);