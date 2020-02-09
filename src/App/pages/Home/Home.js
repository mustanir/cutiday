import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import PeopleIcon from '@material-ui/icons/People';
import { useHistory } from 'react-router-dom';
import {
  MuiPickersUtilsProvider,
  DatePicker,
} from '@material-ui/pickers';
import {  makeStyles } from '@material-ui/core/styles';

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
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
}));

export function Home(props) {
  const history = useHistory();

  const handleClick = () => {
    history.push("/result");
  };

  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Box my={4} mt={10}  align="center">
        <Typography variant="h4" component="h1" gutterBottom>
          Find your ideal travel package
        </Typography>
        <img src={require("../../images/cutiday.png")} width="211" height="70" alt="logo"/>
      </Box>
      <form className={classes.form} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              name="destination"
              variant="outlined"
              required
              fullWidth
              value={props.destination}
              onChange={props.changeDestination}
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
                value={props.fromdate}
                onChange={props.changeFromDate}
                keyboardbuttonprops={{
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
                value={props.todate}
                onChange={props.changeToDate}
                keyboardbuttonprops={{
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
             value={props.pax}
             onChange={props.changePax}
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
            <Button onClick={handleClick} fullWidth size="large" variant="contained" color="primary">
              Search
            </Button>
          </Grid>
        </Grid>
      </form>
      <Copyright />
    </Container>
  );
}
