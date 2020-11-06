import { combineReducers } from "redux";
import authReducer from "./reducers/authReducer";
import projectReducer from './reducers/projectReducer';
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    auth: authReducer,
    project: projectReducer
})

export default rootReducer