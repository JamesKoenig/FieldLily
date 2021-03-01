import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import {
  Switch,
  Route,
} from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';

import HabitsContainer from './habits/habits_container';
import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import ProfileContainer from './profile/profile_container';
import HabitComposeContainer from './habits/habit_compose_container';
import HabitUpdateContainer from './habits/habit_update_container'
import ResourcesContainer from './resources/resources_container';


import './app.css';

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
        <AuthRoute exact path="/" component={MainPage} />
        <Route exact path="/habits" component={HabitsContainer} />
        <Route exact path="/resources" component={ResourcesContainer} />
        <ProtectedRoute exact path="/profile" component={ProfileContainer} />
        <ProtectedRoute exact path="/new_habit" component={HabitComposeContainer} />
        <ProtectedRoute exact path="/habits/:habit_id/update" component={HabitUpdateContainer} />
    </Switch>
    <footer id="footer">
      CC-BY 4.0 &copy; 2021
    </footer>
  </div>
);

export default App;
