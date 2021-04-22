import React from 'react';
//import * as stylings from './stylings';

import HabitsContainer from '../habits/habits_container';


const Main = ({
  height,
  width,
  mainStatus: state,
  activeElement,
  putMainToSleep,
}) => {
  console.log([height,width,state,activeElement]);
  return (
    <div onClick={ () => putMainToSleep() }>
      <div>
        <HabitsContainer />
      </div>
    </div>
  );
}

export default Main;
