import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import PeopleIcon from '@material-ui/icons/People';
import {
  MuiPickersUtilsProvider,
  DatePicker,
} from '@material-ui/pickers';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';

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

function Copyright() {
  return (
    <Box align="center" mt={5}>
      <Typography variant="body2" color="textSecondary">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          cutiday.com
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </Box>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
}));

export default function App() {
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
            </Typography>
            <Button color="inherit">Login</Button>
            <Button color="inherit">Register</Button>
          </Toolbar>
        </AppBar>
        <Container maxWidth="sm">
          <Box my={4} mt={10}  align="center">
            <Typography variant="h4" component="h1" gutterBottom>
              Find your ideal travel package
            </Typography>
            <img src={require("./images/cutiday.png")} width="211" height="70"/>
          </Box>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="destination"
                  name="destination"
                  variant="outlined"
                  required
                  fullWidth
                  id="destination"
                  label="Enter a Destination or Theme"
                  autoFocus
                />
              </Grid>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid item xs={12} sm={6}>
                  <DatePicker
                    variant="inline"
                    inputVariant="outlined"
                    format="dd/MM/yyyy"
                    margin="normal"
                    id="start-date"
                    label="Start Date"
                    fullWidth
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <DatePicker
                    margin="normal"
                    variant="inline"
                    inputVariant="outlined"
                    id="end-date"
                    label="End Date"
                    format="dd/MM/yyyy"
                    fullWidth
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                  />
                </Grid>
              </MuiPickersUtilsProvider>
              <Grid item xs={12}>
                <TextField
                 id="no-pax"
                 name="no-pax"
                 label="No. of Pax"
                 variant="outlined"
                 fullWidth
                 InputProps={{
                   startAdornment: (
                     <InputAdornment position="start">
                       <PeopleIcon />
                     </InputAdornment>
                   ),
                 }}
               />
              </Grid>
              <Grid item xs={12}>
                <Button fullWidth size="large" variant="contained" color="primary">
                  Search
                </Button>
              </Grid>
            </Grid>
          </form>
          <Copyright />
        </Container>
      </div>
    </ThemeProvider>
  );
}
