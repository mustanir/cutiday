import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import PeopleIcon from '@material-ui/icons/People';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: "5%",
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export function Pakej() {
  const classes = useStyles();

  const [pakej, setPakej] = React.useState([]);

  async function fetchPakej() {
      const res = await fetch("/api/getPakej");
      res
        .json()
        .then(pakej => setPakej(pakej))
    }

  React.useEffect(() =>  {
    fetchPakej()
  }, []);

  return (
    <div>
    {
      pakej.length ? (
      <div>
      {
        pakej.map((item) => {
          return(
            <Paper className={classes.paper}>
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase className={classes.image}>
                    <img className={classes.img} alt="pakejimage" src={item.image} />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="h6">
                        {item.location}
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        {item.description}
                      </Typography>
                      <Typography variant="overline" gutterBottom>
                        From: {item.user}
                      </Typography>
                      <Grid container direction="row" alignItems="center" wrap="nowrap" spacing={1}>
                        <Grid item>
                          <PeopleIcon color="action" fontSize="small"/>
                        </Grid>
                        <Grid item>
                          <Typography variant="body2" color="textSecondary">
                            {item.pax}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle2" color="primary" style={{ cursor: 'pointer' }}>
                        {item.theme}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">{item.price}</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          );
        })}
      </div>
      ) : (
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Typography gutterBottom variant="subtitle1">
              No Pakej Item Found
            </Typography>
          </Grid>
        </Paper>
      )
    }
  </div>
  );
}
