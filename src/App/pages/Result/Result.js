import React from 'react';
import { Pakej } from './Pakej';
import { Navbar2 } from './Navbar2';


export function Result(props) {

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
