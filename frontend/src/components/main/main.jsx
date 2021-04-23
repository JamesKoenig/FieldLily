import React, {useEffect} from 'react';
import * as stylings from './stylings';

import HabitsContainer from '../habits/habits_container';
import MainEntity from './main_entity_container';

const Main = ({
  height,
  width,
  mainStatus: status,
  putMainToSleep,
  detatchMain,
}) => {
  useEffect(() => {
    putMainToSleep();
    return () => {
      detatchMain();
    }
  }, []);

  const onClick = () => {
    putMainToSleep();
  }

  return (
    <div onClick={onClick}
         style={stylings.container}>
      <div style={stylings[status](height,width)}>
        <HabitsContainer />
      </div>
      <MainEntity />
    </div>
  );
}

export default Main;
