import React from 'react';
import ReactDOM from 'react-dom';
import {login} from './util/session_api_util'
import configureStore from '../frontend/store/store'

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<h1>REACT IS WORKING whoooo</h1>, root);
  
});
window.login = login
window.getState = store.getState;
window.dispatch = store.dispatch;
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