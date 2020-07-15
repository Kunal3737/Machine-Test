import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import { loginAction } from "../actions/loginAction";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  loginFormWrapper: {
    width: 500,
    height: 400,
    backgroundColor: "#eee",
    boxSizing: "border-box",
    padding: theme.spacing(10),
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  loginButton: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  formWrapper: {
    boxSizing: "border-box",
  },
  textField: {
    width: "100%",
    padding: theme.spacing(1),
  },
}));

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const loginHandler = (e) => {
    e.preventDefault();
    if (!email) {
      setEmailError("Please enter a valid email");
    }
    if (!password) {
      setPasswordError("Please enter a password");
    }
    if( email && password && !emailError && !passwordError ) {
      setIsLogin(true);
      props.loginAction(email, password);
      props.history.push("/navbar");
    }
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid className={classes.formWrapper} container>
        <Grid item>
          <form
            className={classes.loginFormWrapper}
            noValidate
            autoComplete="off"
            onSubmit={loginHandler}
          >
            <TextField
              id="outlined-error-helper-text"
              helperText={emailError}
              placeholder="Email"
              variant="outlined"
              type="text"
              value={email}
              className={classes.textField}
              onChange={(e) => {
                setEmail(e.target.value);
                if (!e.target.value) {
                  setEmailError("Please enter email");
                }
                if (
                  !e.target.value.includes("@") ||
                  !e.target.value.includes(".")
                ) {
                  setEmailError("Please enter a valid email");
                } else {
                  setEmailError("");
                }
              }}
            />
            <br />
            <TextField
              id="outlined-error-helper-text"
              helperText={passwordError}
              placeholder="Password"
              variant="outlined"
              type="password"
              value={password}
              className={classes.textField}
              onChange={(e) => {
                setPassword(e.target.value);
                if (e.target.value.length < 8) {
                  setPasswordError("Password must be alteast 8 characters");
                } else {
                  setPasswordError("");
                }
              }}
            />
            <div className={classes.loginButton}>
              <Button variant="contained" color="primary" type="submit">
                LOG IN
              </Button>
            </div>
          </form>
        </Grid>
      </Grid>
    </div>
  );
}

const mapStateToProps = (state) => ({
  state
});

const mapDispatchToProps = (dispatch) => {
  return {
    loginAction: (email, password) => dispatch(loginAction(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);