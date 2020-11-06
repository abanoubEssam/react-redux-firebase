// firebase packages
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore'; // for firestore
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { applyMiddleware, compose, createStore } from 'redux';
import { createFirestoreInstance } from 'redux-firestore';
import thunk from 'redux-thunk';
import App from './App';
// import { isLoaded } from 'react-redux-firebase'
import { fbConfig, reduxFirebase } from './config/firebase.config';
import './index.css';
import reportWebVitals from './reportWebVitals';
import rootReducer from './store/rootReducer';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
  )
);

firebase.initializeApp(fbConfig);



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider
        firebase={firebase}
        config={reduxFirebase}
        dispatch={store.dispatch}
        createFirestoreInstance={createFirestoreInstance}>
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
