import React from 'react';
import { Pakej } from './Pakej';
import { Navbar2 } from './Navbar2';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({

}));

export function Result(props) {
  const classes = useStyles();

  return (
    <div>
      <Navbar2 destination={props.destination} changeDestination={props.changeDestination}
            fromdate={props.fromdate} changeFromDate={props.changeFromDate}
            todate={props.todate} changeToDate={props.changeToDate}
            pax={props.pax} changePax={props.changePax}/>
      <Pakej destination={props.destination} changeDestination={props.changeDestination}
            fromdate={props.fromdate} changeFromDate={props.changeFromDate}
            todate={props.todate} changeToDate={props.changeToDate}
            pax={props.pax} changePax={props.changePax}/>
    </div>
  );
}
