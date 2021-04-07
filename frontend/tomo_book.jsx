import React from 'react';
import ReactDOM from 'react-dom';
import {login, signup, logout} from './util/session_api_util'
import configureStore from '../frontend/store/store'
import Root from "./components/root"
document.addEventListener('DOMContentLoaded', () => {
  
  const store = configureStore();
  const root = document.getElementById('root');
  // const mike = {id: 123, username: 'mike', password:'123456', email:'123', birthday: '20200101'};
  // window.logout = logout;
  // window.signup = signup;
  // window.login = login;
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  // window.login(mike);
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