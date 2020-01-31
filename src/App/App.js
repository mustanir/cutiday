import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {
  createMuiTheme,
  ThemeProvider,
  makeStyles
} from '@material-ui/core/styles';
import {Home} from './pages/Home/Home'
import {Navbar} from './pages/Navbar/Navbar'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ff5131',
      main: '#d50000',
      dark: '#9b0000',
      contrastText: '#fff',
    },
    secondary: {
      light: '#6d6d6d',
      main: '#424242',
      dark: '#1b1b1b',
      contrastText: '#000',
    },
  },
});

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}));

export default function App() {

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Navbar />
        <Router>
            <Switch>
              <Route path="/" component={Home}>
              </Route>
              <Route path="/about">
              </Route>
              <Route path="/users">
              </Route>
            </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}
