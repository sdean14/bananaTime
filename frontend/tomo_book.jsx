import React from 'react';
import ReactDOM from 'react-dom';
import {login, signup, logout} from './util/session_api_util'
import configureStore from '../frontend/store/store'
import Root from "./components/root"
document.addEventListener('DOMContentLoaded', () => {
  
  const store = configureStore();
  const root = document.getElementById('root');
  
  // window.signout = logout;
  // window.signup = signup;
  // window.login = login;
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  ReactDOM.render(<Root store={store}/>, root);
  
});
// {
//   entities: {
//     users: {
//       1: {
//         id: 1,
//         username: 'breakfast'
//       }
//     }
//   },
//   session: {
//     id: 1
//   },
//   errors: {
//     session: []
//   }
// }