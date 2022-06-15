import { FETCH_SPACEXDATA } from '../action/type';

export default function SpaceXReducer(state = [], action) {
  switch (action.type) {
      case FETCH_SPACEXDATA:
      return action.data;
    default:
      return state;
  }
}