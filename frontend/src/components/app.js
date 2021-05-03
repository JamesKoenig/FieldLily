import React from 'react';
import { ProtectedRoute } from '../util/route_util';
import {
  Switch,
  Route,
} from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';
//import HabitsIndexPage from './habits/habits_page';
import SearchBarContainer from './nav/searchbar';

import Footer from './footer/footer';
import ProfileContainer from './profile/profile_container';
//import HabitComposeContainer from './habits/habit_compose_container';
//import HabitShowPage from './habits/habit_show_page';
//import ResourcesContainer from './resources/resources_container';
//import ResourceShowContainer from './resources/resource_show_container';
//import NotFoundPage from './error-pages/not_found_page'
import Main from './main/main_container'; 
import Modal from './modal/modal_container';

const App = () => (
  <div>
    <Modal />
    <SearchBarContainer />
    <NavBarContainer />
    <Switch>
      <ProtectedRoute exact path="/profile" component={ProfileContainer} />
      <Route path={["/habits/:habitId",
                    "/habits/:habitId/resource/:resourceId","/"]} 
             component={Main} />
    </Switch>
    <Footer />
  </div>
);
/*
    <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/habits" component={HabitsIndexPage} />
        <Route exact path="/habits/:habitId" component={HabitShowPage} />
        <Route exact path="/resources" component={ResourcesContainer} />
        <Route exact path="/resources/:resourceId" component={ResourceShowContainer} />
        <ProtectedRoute exact path="/new_habit" component={HabitComposeContainer} />
        <Route component={NotFoundPage} />
    </Switch>
); */

export default App;
