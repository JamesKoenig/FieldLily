import React from 'react';
import { Link } from 'react-router-dom';
import * as stylings from './stylings';

import HabitsContainer from '../habits/habits_container';
import MainEntity from './main_entity_container';

const Main = ({
  height,
  width,
  status,
}) => {
  return (
    <Link to="/" 
          style={{
            cursor: "default",
            color: "inherit",
            textDecoration: "none",
          }}>
      <div style={stylings.container}>
        <div style={stylings[status](height,width)}>
          <HabitsContainer />
        </div>
        <MainEntity />
      </div>
    </Link>
  );
}

export default Main;
