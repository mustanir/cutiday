import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const acctypes = [
  {
    value: 'company',
    label: 'Company',
  },
  {
    value: 'mutawwif',
    label: 'Mutawwif',
  },
  {
    value: 'freelance',
    label: 'Freelance',
  },
];

export function RegisterDialog() {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [acctype, setAcctype] = React.useState("");
  const [mattamember, setMattamember] = React.useState("yes");

  const handleChange = event => {
    setAcctype(event.target.value);
  };

  const handleChange2 = event => {
    setMattamember(event.target.value);
  };



  return (
    <div>
      <Button color="inherit" onClick={handleClickOpen}>Register</Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth="sm" fullWidth>
        <DialogTitle id="form-dialog-title">Register</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter your details to register
          </DialogContentText>
          <TextField
            id="acctype"
            margin="dense"
            select
            label="Account Type"
            value={acctype}
            onChange={handleChange}
            variant="outlined"
            fullWidth
          >
            {acctypes.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          {
            acctype === "company" ?
            <div>
              <TextField
                autoFocus
                required
                margin="dense"
                variant="outlined"
                id="ssm"
                label="SSM No."
                fullWidth
              />
              <TextField
                required
                margin="dense"
                variant="outlined"
                id="username"
                label="Username"
                fullWidth
              />
              <TextField
                required
                margin="dense"
                variant="outlined"
                id="password"
                label="Password"
                type="password"
                fullWidth
              />
              <TextField
                required
                margin="dense"
                variant="outlined"
                id="fullname"
                label="Full Name"
                fullWidth
              />
              <TextField
                required
                margin="dense"
                variant="outlined"
                id="email"
                label="Email"
                type="email"
                fullWidth
              />
              <TextField
                required
                margin="dense"
                variant="outlined"
                id="contactno"
                label="Contact No."
                fullWidth
              />
              <TextField
                id="mattamember"
                select
                label="Matta Member?"
                value={mattamember}
                onChange={handleChange2}
                variant="outlined"
                margin="dense"
                fullWidth
              >
                <MenuItem value="yes">Yes</MenuItem>
                <MenuItem value="no">No</MenuItem>
              </TextField>
            </div> :
            acctype === "mutawwif" ?
            <div>
              <TextField
                required
                margin="dense"
                variant="outlined"
                id="fullname"
                label="Full Name"
                fullWidth
              />
              <TextField
                required
                margin="dense"
                variant="outlined"
                id="username"
                label="Username"
                fullWidth
              />
              <TextField
                required
                margin="dense"
                variant="outlined"
                id="password"
                label="Password"
                type="password"
                fullWidth
              />
              <TextField
                required
                margin="dense"
                variant="outlined"
                id="email"
                label="Email"
                type="email"
                fullWidth
              />
              <TextField
                required
                margin="dense"
                variant="outlined"
                id="contactno"
                label="Contact No."
                fullWidth
              />
            </div> :
            acctype === "freelance" ?
            <div>
              <TextField
                required
                margin="dense"
                variant="outlined"
                id="fullname"
                label="Full Name"
                fullWidth
              />
              <TextField
                required
                margin="dense"
                variant="outlined"
                id="username"
                label="Username"
                fullWidth
              />
              <TextField
                required
                margin="dense"
                variant="outlined"
                id="password"
                label="Password"
                type="password"
                fullWidth
              />
              <TextField
                required
                margin="dense"
                variant="outlined"
                id="email"
                label="Email"
                type="email"
                fullWidth
              />
              <TextField
                required
                margin="dense"
                variant="outlined"
                id="contactno"
                label="Contact No."
                fullWidth
              />
            </div> : null
          }

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Register
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
