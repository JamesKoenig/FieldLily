import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as stylings from './stylings';

import HabitsContainer from '../habits/habits_container';
import MainEntity from './main_entity_container';

const Main = ({
  height,
  width,
  status,
}) => {
  const [ styleState, setStyleState ] = useState("detatched");

  useEffect( () => {
    setStyleState(status);
  }, [status]);

  return (
    <Link to="/"
          style={{
            cursor: "default",
            color: "inherit",
            textDecoration: "none",
          }}>
      <div style={stylings.container}>
        <div style={stylings[styleState](height,width)}>
          <HabitsContainer />
        </div>
        <MainEntity />
      </div>
    </Link>
  );
}

export default Main;
