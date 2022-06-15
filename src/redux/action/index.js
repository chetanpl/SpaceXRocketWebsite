import { FETCH_SPACEXDATA } from './type';
import axios from 'axios';

const apiUrl = 'https://api.spacexdata.com/v4/launches/past';

export const fetchData = (data) => {
  return {
    type: FETCH_SPACEXDATA,
    data
  }
};

export const fetchSpacexData = () => {
  return (dispatch) => {
    return axios.get(apiUrl)
      .then(response => {
        dispatch(fetchData(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};