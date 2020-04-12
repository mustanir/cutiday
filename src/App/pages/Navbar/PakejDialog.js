import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Dialog from '@material-ui/core/Dialog';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  DatePicker,
} from '@material-ui/pickers';

const categories = [
  {
    value: 'honeymoon',
    label: 'Honeymoon',
  },
  {
    value: 'schooltrip',
    label: 'School Trip',
  },
  {
    value: 'vacation',
    label: 'Vacation',
  },
  {
    value: 'teambuilding',
    label: 'Team Building',
  },
  {
    value: 'trainingcourse',
    label: 'Training Course',
  },
];

export function PakejDialog() {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [pakejName, setPakejName] = React.useState("");
  const [pakejDesc, setPakejDesc] = React.useState("");
  const [pax, setPax] = React.useState(0);
  const [category, setCategory] = React.useState("");
  const [fromDate, setFromDate] = React.useState(new Date());
  const [toDate, setToDate] = React.useState(new Date());

  const handlePakejNameChange = event => {
    setPakejName(event.target.value);
  };

  const handlePakejDescChange = event => {
    setPakejDesc(event.target.value);
  };

  const handlePaxChange = event => {
    setPax(event.target.value);
  };

  const handleCategoryChange = event => {
    setCategory(event.target.value);
  };

  const handleFromDateChange = date => {
    setFromDate(date.target.value);
  };

  const handleToDateChange = date => {
    setToDate(date.target.value);
  };

  return (
    <div>
      <Button color="inherit" onClick={handleClickOpen}>Add Package</Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth="sm" fullWidth>
        <DialogTitle id="form-dialog-title">Add Package</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter details of the holiday package
          </DialogContentText>
          <TextField
            id="pakejName"
            margin="normal"
            autoFocus
            required
            label="Package Name"
            value={pakejName}
            onChange={handlePakejNameChange}
            variant="outlined"
            fullWidth
          />
          <TextField
            margin="normal"
            variant="outlined"
            id="pakejDesc"
            label="Package Description"
            value={pakejDesc}
            onChange={handlePakejDescChange}
            fullWidth
          />
          <TextField
            required
            margin="normal"
            variant="outlined"
            id="pax"
            label="No. of Pax"
            value={pax}
            onChange={handlePaxChange}
            fullWidth
          />
          <TextField
            select
            id="category"
            label="Category"
            value={category}
            onChange={handleCategoryChange}
            variant="outlined"
            margin="normal"
            fullWidth
          >
            {categories.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <Grid container spacing={2}>
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
                  value={fromDate}
                  onChange={handleFromDateChange}
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
                  value={toDate}
                  onChange={handleToDateChange}
                  keyboardbuttonprops={{
                    'aria-label': 'change date',
                  }}
                />
              </Grid>
            </MuiPickersUtilsProvider>
          </Grid>
          <Box mt={1}/>
          <Button
            variant="contained"
            component="label"
            color="primary"
            size="large"
          >
            Upload Photo
            <input
              accept="image/*"
              type="file"
              style={{ display: "none" }}
            />
          </Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} size="large" color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} size="large" color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
