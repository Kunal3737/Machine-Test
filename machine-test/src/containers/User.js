import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import NavBar from "../components/NavBar";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { loginAction } from '../actions/loginAction';

const useStyles = makeStyles({
  typography: {
    width: "100%",
    // maxWidth: 500
  },
  navBarWrapper: {
    width: "100%",
  },
  userWrapper: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#eee",
    padding: 80,
  },
});

function User(props) {
  const classes = useStyles();
  const [changePass, setChangePass] = useState(false);
  const [newPassword, setNewPassword] = useState('');

  return (
    <Grid container>
      {!changePass ? (
        <>
          <Grid className={classes.navBarWrapper}>
            <NavBar />
          </Grid>
          <Grid item className={classes.userWrapper}>
            <div className={classes.typography}>
              <Typography variant="h5" gutterBottom>
                UserName: {props.userName}
              </Typography>
              <br />
              <Typography variant="h5" gutterBottom>
                Password:{" "}
                <input type="password" value={props.password} readOnly />
              </Typography>
              <br />
            </div>
            <div className={classes.root}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => setChangePass(true)}
              >
                Change Password
              </Button>
              &nbsp;
              <Button variant="contained" color="secondary">
                <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                  Logout
                </Link>
              </Button>
            </div>
          </Grid>
        </>
      ) : (
        <>
          <Grid className={classes.navBarWrapper}>
            <NavBar />
          </Grid>
          <Grid item className={classes.userWrapper}>
            <div className={classes.typography}>
              <Typography variant="h5" gutterBottom>
                UserName: {props.userName}
              </Typography>
              <br />
              <Typography variant="h5" gutterBottom>
                New Password:{" "}
                <input type="password" value={newPassword} onChange={e => {
                    setNewPassword(e.target.value)
                }} />
              </Typography>
              <br />
            </div>
            <div className={classes.root}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                    alert("New password saved")
                    props.loginAction(props.userName, newPassword)
                }}
              >
                Save
              </Button>
              &nbsp;
              <Button variant="contained" color="secondary">
                <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                  Logout
                </Link>
              </Button>
            </div>
          </Grid>
        </>
      )}
    </Grid>
  );
}

const mapStateToProps = (state) => ({
  userName: state.loginReducer.userName,
  password: state.loginReducer.password,
});

const mapDispatchToProps = (dispatch) => {
    return {
      loginAction: (userName, password) => dispatch(loginAction(userName, password)),
    };
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(User);
