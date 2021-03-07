import { combineReducers } from 'redux';

import modalReducer from './LegoComponents/Modal/Modal.reducer';
import { IModalState } from './LegoComponents/Modal/Modal.types';

// To store a state into master State, just add your reducer into State Interface.
export interface State {
    topBar: IModalState,

}
// To store a reducer into appReducer, just add the reducer into combineReducer.
const appReducer = combineReducers({
  topBar: modalReducer,

});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
