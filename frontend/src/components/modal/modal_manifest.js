import LoginForm  from '../session/login_form_container';
import SignupForm from '../session/signup_form_container';
import HabitCompose from '../habits/habit_compose_container';
import ResourceForm from '../resources/resource_form_container';
import HabitDeleteConfirmPrompt
  from '../habits/habit_delete_confirmation';
import ResourceDeleteConfirmPrompt
  from "../resources/resource_delete_confirmation";

const sessionModals = {
  'login': LoginForm,
  'signup': SignupForm,
};

const entityModals = {
  "habit": HabitCompose,
  "resource": ResourceForm,
};

const confirmationModals = {
  "delete habit": HabitDeleteConfirmPrompt,
  "delete resource": ResourceDeleteConfirmPrompt
}

const modalManifest = {
  "session": sessionModals,
  "entities": entityModals,
  "confirmation": confirmationModals,
};

function modalManifestFn(type, subtype) {
  if(modalManifest[type] && modalManifest[type][subtype]) {
    return modalManifest[type][subtype];
  } else {
    return null;
  }
}

export default modalManifestFn;
