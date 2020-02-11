import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {
  createMuiTheme,
  ThemeProvider,
  makeStyles
} from '@material-ui/core/styles';
import {Home} from './pages/Home/Home'
import {Result} from './pages/Result/Result'
import {Navbar} from './pages/Navbar/Navbar'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ff5131',
      main: '#d50000',
      dark: '#9b0000',
      contrastText: '#fff',
      gray: '#bdbdbd',
      white: '#fafafa',
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
  const [selectedPax, setSelectedPax] = React.useState(0);

  const handlePaxChange = pax => {
    setSelectedPax(pax.target.value);
  };

  const [selectedDestination, setSelectedDestination] = React.useState('');

  const handleDestinationChange = destination => {
    setSelectedDestination(destination.target.value);
  };

  const [selectedFromDate, setSelectedFromDate] = React.useState(new Date());

  const handleFromDateChange = date => {
    setSelectedFromDate(date.target.value);
  };

  const [selectedToDate, setSelectedToDate] = React.useState(new Date());

  const handleToDateChange = date => {
    setSelectedToDate(date.target.value);
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Router>
          <Switch>
            <Route exact path="/">
              <Home destination={selectedDestination} changeDestination={handleDestinationChange}
                    fromdate={selectedFromDate} changeFromDate={handleFromDateChange}
                    todate={selectedToDate} changeToDate={handleToDateChange}
                    pax={selectedPax} changePax={handlePaxChange} />
            </Route>
            <Route path="/result">
              <Result destination={selectedDestination} changeDestination={handleDestinationChange}
                  fromdate={selectedFromDate} changeFromDate={handleFromDateChange}
                  todate={selectedToDate} changeToDate={handleToDateChange}
                  pax={selectedPax} changePax={handlePaxChange} />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}
