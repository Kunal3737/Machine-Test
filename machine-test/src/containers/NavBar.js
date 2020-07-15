import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Dropdown from '../components/Dropdown';
import InformationComponent from '../components/InformationComponent';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  navWrapper: {
    justifyContent: 'flex-end',
  },
  homeActive: {
    width: theme.spacing(15),
  },
  tasksActive: {
    width: theme.spacing(15)
  },
  userActive: {
    width: theme.spacing(15),
  },
}));

export default function NavBar() {
  const classes = useStyles();
  const [dropdownData, setDropdownData] = useState('');

  const eventhandler = data => setDropdownData(data)

  return (
      <>
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            LOGO
          </Typography>
          <Grid container className={classes.navWrapper}>
          <Grid item component="span" m={2} className={classes.homeActive}>
            <Link to="/navbar" style={{textDecoration: "none", color: "white" }}>Home</Link>
          </Grid>
          <Grid item component="span" m={2} className={classes.tasksActive}>
            <Link to="/tasks" style={{textDecoration: "none", color: "white" }}>Tasks</Link>
          </Grid>
          <Grid item component="span" m={2} className={classes.userActive}>
          <Link to="/user" style={{textDecoration: "none", color: "white" }}>User</Link>
          </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Dropdown onChange={eventhandler} />
        </Grid>
        <Grid item xs={12}>
          <InformationComponent dropdownData={dropdownData}/>
        </Grid>
      </Grid>
    </div>
    </>
  );
}
