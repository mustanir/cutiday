import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import PeopleIcon from '@material-ui/icons/People';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: "2%",
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

export function Pakej(props) {
  const classes = useStyles();

  const [pakej, setPakej] = React.useState([]);
  const [pakejResult, setPakejResult] = React.useState([]);
  const [isFetch, setIsFetch] = React.useState(false);

  React.useEffect(() => {
      fetch("/api/getPakej")
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Something went wrong");
          }
        })
        .then(jsonResponse => {
          setPakej(jsonResponse);
          setIsFetch(true);
        })
        .catch(error => {
          console.log(error);
        });
    }, []
  );

  React.useEffect(() =>  {
    if (isFetch === true){
      const results = pakej.filter(item =>
        (!props.destination || item.location.toLowerCase().includes(props.destination)) &&
        (props.pax !== 0 || item.pax === props.pax) 
        //((!props.fromdate && !props.todate) ||
        //  (props.fromdate >= item.dateavailablestart &&
        //  props.todate <= item.dateavailableend))
      );
      setPakejResult(results);
    }
  }, [isFetch]);

  return (
    <div>
    {
      pakejResult.length ? (
      <div>
      {
        pakejResult.map((item) => {
          return(
            <Paper key={item.id} className={classes.paper}>
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
