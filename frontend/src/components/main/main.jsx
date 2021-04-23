import React, {useEffect} from 'react';
import * as stylings from './stylings';

import HabitsContainer from '../habits/habits_container';

const Main = ({
  height,
  width,
  mainStatus: status,
  activeElement,
  putMainToSleep,
  detatchMain,
}) => {
  //this is here for now because we're GOING To use them
  // so I'd prefer to be annoyed by it to be reminded to DO that
  console.log([height,width,status,activeElement]);
  useEffect(() => {
    putMainToSleep();
    return () => {
      detatchMain();
    }
  }, []);
  return (
    <div onClick={ () => putMainToSleep() }
         style={stylings.container}>
      <div style={stylings[status](height,width)}>
        <HabitsContainer />
      </div>
    </div>
  );
}

export default Main;
