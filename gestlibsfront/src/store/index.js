import Vue from 'vue';
import Vuex from 'vuex';
import authModule from './module/authModule'; // Asegúrate de tener la ruta correcta
import bookModule from './module/bookModule'; // Asegúrate de tener la ruta correcta

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth: authModule,
    book:bookModule
  },
});
