/*Boiler Plate Reducer*/
import {
  TEST_INDEX
} from '../actions/types';
import { REHYDRATE } from 'redux-persist/constants';

const INITIAL_STATE = {testString: ''};

const testReducer = (state=INITIAL_STATE, actions) => {
  switch(actions.type) {
    case REHYDRATE:
      console.log(actions);
      return actions.payload.testReducer || []
    case TEST_INDEX:
      console.log('Inside test index');
      console.log(actions);
      return { ...state, testString: actions.payload }
    default:
      return state;
  }
}

export default testReducer;
