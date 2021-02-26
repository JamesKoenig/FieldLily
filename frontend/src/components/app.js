import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';

import HabitsContainer from './habits/habits_container';
import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import ProfileContainer from './profile/profile_container';
import HabitComposeContainer from './habits/habit_compose_container';
import HabitUpdateContainer from './habits/habit_update_container'



const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
        <AuthRoute exact path="/" component={MainPage} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />

        <ProtectedRoute exact path="/habits" component={HabitsContainer} />
        <ProtectedRoute exact path="/profile" component={ProfileContainer} />
        <ProtectedRoute exact path="/new_habit" component={HabitComposeContainer} />
        <ProtectedRoute exact path="/habits/:habit_id/update" component={HabitUpdateContainer} />
    </Switch>
  </div>
);

export default App;