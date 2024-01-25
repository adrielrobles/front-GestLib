// src/store/modules/authModule.js
import authService from '../../services/authService';

const state = {
  isAuthenticated: false,
  user: null,
};

const mutations = {
  SET_AUTHENTICATED(state, isAuthenticated) {
    state.isAuthenticated = isAuthenticated;
  },
  SET_USER(state, user) {
    state.user = user;
  },
};

const actions = {
  async login({ commit }, { email, password }) {
    try {
      const response = await authService.login(email, password);
      const user = response.data; // Ajusta esto según la estructura de tu respuesta
      commit('SET_AUTHENTICATED', true);
      commit('SET_USER', user);
      // Redirige al usuario a otra página o realiza otras acciones según sea necesario
    } catch (error) {
      // Manejar errores, mostrar mensajes de error, etc.
      console.error('Error de inicio de sesión:', error);
    }
  },
  // Agrega otras acciones según sea necesario
};

const getters = {
  // Puedes agregar getters según sea necesario
};

const namespaced = true;

export default {
  state,
  mutations,
  actions,
  getters,
  namespaced, 
};
