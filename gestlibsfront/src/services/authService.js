// src/services/authService.js
import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000'; // Reemplaza con la URL de tu backend

export default {
  login(email, password) {
    console.log(email);
    return axios.post(`${BASE_URL}/login`, { email, password });
  },
  // Agrega otras funciones según sea necesario
};


