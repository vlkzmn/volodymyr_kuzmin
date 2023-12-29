import axios from 'axios';

export const sendRequest = (data) => {
  return axios.post('https://vlkzmn-api.onrender.com', data);
};
