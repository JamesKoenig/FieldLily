import React from 'react';
//import * as stylings from './stylings';

import HabitsContainer from '../habits/habits_container';


const Main = ({height,width}) => {
  //set the state for the styling of the 
  console.log([height,width]);
  return (
    <HabitsContainer />
  );
}
export default Main;
