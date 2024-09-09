import axios from 'axios';

const API_URL = 'http://localhost:3000/api'; // Ensure this matches your backend URL

export default {
  register(user) {
    return axios.post(`${API_URL}/register`, user);
  },
  login(user) {
    return axios.post(`${API_URL}/login`, user);
  },
};
