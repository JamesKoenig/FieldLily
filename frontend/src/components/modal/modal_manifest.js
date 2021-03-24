import LoginForm  from '../session/login_form_container';
import SignupForm from '../session/signup_form_container';
import HabitCompose from '../habits/habit_compose_container';
import ResourceForm from '../resources/resource_form';

const sessionModals = {
  'login': LoginForm,
  'signup': SignupForm,
};

const entityModals = {
  "habit": HabitCompose,
  "resource": ResourceForm,
};

const modalManifest = {
  "session": sessionModals,
  "entities": entityModals,
};

function modalManifestFn(type, subtype) {
  if(modalManifest.hasOwnProperty(type) &&
     modalManifest[type].hasOwnProperty(subtype)) {
    return modalManifest[type][subtype];
  } else {
    return null;
  }
}

export default modalManifestFn;
