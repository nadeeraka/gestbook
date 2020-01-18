import React from "react";
import "./App.css";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { useStyles } from "./styles/index";
import MenuIcon from '@material-ui/icons/Menu';

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <>
      <Link to="/">Home Page</Link>
      <span>:</span>
      <Link to="/about">About </Link>
      <Switch>
        <Route exact path="/">
          <p>Home</p>
        </Route>
        <Route exact path="/about">
          <p>About</p>
        </Route>
        <Redirect to="/" />
      </Switch>
      <div className="">
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>

            <Typography variant="h6" className={classes.title}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};

export default App;
