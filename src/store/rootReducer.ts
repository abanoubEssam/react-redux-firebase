import { combineReducers } from "redux";
import authReducer from "./reducers/authReducer";
import projectReducer from './reducers/projectReducer';
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    auth: authReducer,
    project: projectReducer
})

export default rootReducer