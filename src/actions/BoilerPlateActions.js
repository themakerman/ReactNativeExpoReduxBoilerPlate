
/*DEFINE ALL ACTIONS IN THIS FILE*/
import {
  TEST_INDEX
} from './types';

//SAMPLE ACTION CREATOR
export const testAction = (data) => {
  return {
    type: TEST_INDEX,
    payload: data
  };
};

//SAMPLE ASYNC ACTION CREATOR USING REDUX THUNK
export const testActionAsync = (data) => {
  return (dispatch) => {
    dispatch({ type: TEST_INDEX, payload: data });
  }
}
