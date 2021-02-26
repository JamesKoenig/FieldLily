import LoginForm  from '../session/login_form_container';
import SignupForm from '../session/signup_form_container';

export default new Proxy({
    'login': LoginForm,
    'signup': SignupForm,
  }, (obj, key) =>
      obj.hasOwnProperty(key) ? obj[key] : null
);

