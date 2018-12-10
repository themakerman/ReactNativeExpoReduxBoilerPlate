/*Define all reducers in combineReducers() function*/
import { combineReducers } from 'redux';
import TestReducer from './TestReducer';

console.log("Inside combineReducers File");
export default combineReducers({
  testReducer: TestReducer
})
