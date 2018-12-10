/*Boiler Plate Reducer*/
import {
  TEST_INDEX
} from '../actions/types';

const INITIAL_STATE = { testString: '' };

const testReducer = (state=INITIAL_STATE, actions) => {
  switch(actions.type) {
    case TEST_INDEX:
      return { ...state, testString: actions.payload }
    default:
      return { ...state };
  }
}

export default testReducer;
