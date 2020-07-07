import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'leaflet/dist/leaflet.css';
import App from './App';
import 'firebase/auth';
import firebase from './initializers/firebase';
import { Provider } from 'react-redux';
import store from './initializers/store';
import { setUser, clearUser } from './initializers/actions';
import './styles/index.css';
import axios from 'axios'
//---------Estado de autenticación----------------------


firebase.auth().onAuthStateChanged((user) => {
  console.log(user);
  if (user) {
    const userJson = {
      'name': user.displayName,
      'name_all': user.displayName,
      'email': user.email,
      'photo': user.photoURL,
      'phone': user.providerData[0].phoneNumber,
      'agendaAsistir': [],
      'agendaTalvez': []
    }
    axios.post('https://us-central1-aglomer-9c6d9.cloudfunctions.net/user', userJson);
    store.dispatch(setUser(user));
  }
  else {
    store.dispatch(clearUser());
  }
})


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

