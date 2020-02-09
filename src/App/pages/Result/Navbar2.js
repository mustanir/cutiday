import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import PeopleIcon from '@material-ui/icons/People';
import DateFnsUtils from '@date-io/date-fns';
import { useHistory } from 'react-router-dom';
import {
  MuiPickersUtilsProvider,
  DatePicker,
} from '@material-ui/pickers';
import {  fade, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  search: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 200,
    },
    [theme.breakpoints.down('sm')]: {
      width: 0,
      display:'none',
    },
  },
  searchButton: {
    position: 'relative',
    marginLeft: 0,
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
    [theme.breakpoints.down('sm')]: {
      width: 0,
      display:'none',
    },
  },
  appbar: {
    backgroundColor: theme.palette.primary.white,
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      width: 0,
      display:'none',
    },
  },
  image: {
    cursor: 'pointer',
  }
}));

export function Navbar2(props) {
  const history = useHistory();

  const classes = useStyles();

  const imageClick = () => {
    history.push("/");
  };

  return(
    <AppBar position="static" className={classes.appbar}>
      <Toolbar>
        <div className={classes.image}>
          <img src={require("../../images/cutiday.png")} width="120" height="40" alt="logo" onClick={() => imageClick()}/>
        </div>
        <div className={classes.search}>
          <TextField
            name="destination"
            size="small"
            variant="outlined"
            id="destination"
            label="Destination or Theme"
            margin="dense"
            value={props.destination}
            onChange={props.changeDestination}
          />
        </div>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <div className={classes.search}>
            <DatePicker
              inputVariant="outlined"
              size="small"
              format="dd/MM/yyyy"
              margin="dense"
              id="start-date"
              label="Start Date"
              value={props.fromdate}
              onChange={props.changeFromDate}
              keyboardbuttonprops={{
                'aria-label': 'change date',
              }}
            />
          </div>
          <div className={classes.search}>
            <DatePicker
              inputVariant="outlined"
              size="small"
              format="dd/MM/yyyy"
              margin="dense"
              id="end-date"
              label="End Date"
              value={props.todate}
              onChange={props.changeToDate}
              keyboardbuttonprops={{
                'aria-label': 'change date',
              }}
            />
          </div>
        </MuiPickersUtilsProvider>
        <div className={classes.search}>
          <TextField
             id="no-pax"
             name="no-pax"
             label="No. of Pax"
             size="small"
             variant="outlined"
             margin="dense"
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
        </div>
        <div className={classes.searchButton}>
          <Button size="large" variant="contained" color="primary">
            Search
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}
