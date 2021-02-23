import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

const Root = ({ store }) => (
  <Provider store={ store }>
    <HashRouter>Hello Habit-formers!</HashRouter>
  </Provider>
);

export default Root;
