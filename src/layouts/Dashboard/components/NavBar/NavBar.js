import React, { Fragment, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { makeStyles, useTheme  } from '@material-ui/styles';
import { Drawer, Divider, Typography } from '@material-ui/core';
// import Icon from "@material-ui/core/Icon";
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
// import { Hidden } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MenuIcon from '@material-ui/icons/Menu';
import useRouter from 'utils/useRouter';
import { Navigation } from 'components';
import navigationConfig from './navigationConfig';
// import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import Notify from '../../../../assets/img/notify2.png'
import { withRouter } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';



const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    height: '100%',
    // overflowY: 'auto'
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - 189px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    width: '145px'
  },
  drawerPaper: {
    // width: drawerWidth,
    width:192,
    backgroundColor:'#3daa99',
    overflowY: 'hidden'
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
 
    padding: '11px',
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
    // marginLeft:'-14px' 
  },
  profile: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 'fit-content'
  },
  avatar: {
    width: 60,
    height: 60
  },
  name: {
    marginTop: theme.spacing(1)
  },
  divider: {
    marginTop: theme.spacing(2)
  },
  navigation: {
    // marginTop: theme.spacing(2),
    marginTop: "20px",
    paddingLeft: "0",
    paddingTop: "0",
    paddingBottom: "0",
    marginBottom: "0",
    listStyle: "none",
    position: "unset"
  }
}));
const drawerWidth = 240;
const NavBar = props => {
  const { openMobile, onMobileClose, className } = props;

  const classes = useStyles();
  const router = useRouter();
  // const session = useSelector(state => state.session);

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (openMobile) {
      onMobileClose && onMobileClose();
    }
  }, [router.location.pathname]);

  const navbarContent = (
    <div style={{   marginLeft:'1px',padding:'0px' }} className={classes.content}>
      <nav className={classes.navigation}>
        
        {navigationConfig.map(list => (
          <Navigation
            style={{ fontSize:'12px' }}
            component="div"
            key={list.pages}
            pages={list.pages}
            title={list.title}
          />
        ))}
      </nav>
    </div>
  );

  return (
    <Fragment>
      <div className={classes.root}>
     
      <AppBar
      style={{ backgroundColor:'#3daa99' }}
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
       
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
         
          <Typography variant="h6" noWrap>
          </Typography>
          <div>
            <ArrowBackIcon onClick={()=>props.history.goBack()}/>
          </div>
         <div style={{ marginLeft:1000 }}>
         <RouterLink to="/notification">
          <img
            alt="Logo"
            src={Notify}
            style={{ width:33,marginTop:10 }}
          />
         
        </RouterLink>
         </div>
         
        </Toolbar>
       
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        
        <div style={{  minWidth:0,width:0 }}
            // {...rest}
            className={clsx(classes.root, className)}
          >
            {navbarContent}
          </div>
        <Divider />
       
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
      </main>
    </div>
    </Fragment>
  );
};

NavBar.propTypes = {
  className: PropTypes.string,
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

export default withRouter(NavBar);
