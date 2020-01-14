import "date-fns";
import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import cutiImage from './cutiday.png';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from "@date-io/date-fns";
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Nav from './Nav';
import SearchIcon from '@material-ui/icons/Search';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  DatePicker
} from "@material-ui/pickers";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  card: {
    maxWidth: 500,
  },
  media: {
    height: 140,
    width: 400,
  },
});
const image = {
  width: "211",
  height: "70"
};
//const [selectedDate, handleDateChange] = useState(new Date());
export default function MediaCard() {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(
    new Date()
  );

  function handleDateChange(date) {
    setSelectedDate(date);
  }
  return (
    
        <div>
        <BrowserView>
        <Nav />
          <br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container spacing={3}>
          <Grid item xs>
          </Grid>
          <Grid item xs container justify = "center">
            <img src={cutiImage} width={image.width} height={image.height}/>
          </Grid>
          <Grid item xs>
          </Grid>
        </Grid>
        <p align="center">Find your ideal travel package</p>
        <br /><br /><br />
        <Grid container spacing={0}>
          <Grid item xs container justify = "center">
            <TextField id="outlined-basic" label="Destination" variant="outlined" />
          </Grid>
          <Grid item xs>
            <KeyboardDatePicker            
            format="MM/dd/yyyy"            
            id="date-picker-start"
            label="Start date"
            value={selectedDate}
            onChange={handleDateChange}          
            />
          </Grid>
          <Grid item xs>
            <KeyboardDatePicker            
            format="MM/dd/yyyy"            
            id="date-picker-end"
            label="End date"
            value={selectedDate}
            onChange={handleDateChange}          
            />
          </Grid>
          <Grid item xs>
            <TextField
              className={classes.margin}
              id="input-with-icon-textfield"
              label="No. of pax"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
        <br />
        <Grid item xs container justify = "center">
          <Button variant="contained" color="primary">
          <SearchIcon/>
          Search
          </Button>
        </Grid>
        </MuiPickersUtilsProvider>
        </BrowserView>
        <MobileView>
          <br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container spacing={3}>
          <Grid item xs>
          </Grid>
          <Grid item xs container justify = "center">
            <img src={cutiImage} width={image.width} height={image.height}/>
          </Grid>
          <Grid item xs>
          </Grid>
        </Grid>
        <p align="center">Find your ideal travel package</p>
        <br /><br /><br />
        
          <Grid item xs container justify = "center">
            <TextField id="outlined-basic" label="Destination" variant="outlined" />
          </Grid>
          <br />
          <Grid item xs container justify = "center">
            <KeyboardDatePicker            
            format="MM/dd/yyyy"            
            id="date-picker-start"
            label="Start date"
            value={selectedDate}
            onChange={handleDateChange}          
            />
          </Grid>
          <br />
          <Grid item xs container justify = "center">
            <KeyboardDatePicker            
            format="MM/dd/yyyy"            
            id="date-picker-end"
            label="End date"
            value={selectedDate}
            onChange={handleDateChange}          
            />
          </Grid>
          <br />
          <Grid item xs container justify = "center">
            <TextField
              className={classes.margin}
              id="input-with-icon-textfield"
              label="No. of pax"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>        
        <br />
        <Grid item xs container justify = "center">
          <Button variant="contained" color="primary">
          <SearchIcon/>
          Search
          </Button>
        </Grid>
        </MuiPickersUtilsProvider>
        </MobileView>
        </div>
        
        
        );
}