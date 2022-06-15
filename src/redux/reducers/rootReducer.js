import { combineReducers } from 'redux';
import SpaceXReducer from './reducer';

export default combineReducers({
    data: SpaceXReducer
});