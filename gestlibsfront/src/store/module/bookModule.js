// src/store/modules/bookModule.js
import bookService from "../../services/bookService";

const state = {
  books: [],
  categoryFilter: "",
  successMessage: null,
  errorMessage: null,
};

const mutations = {
  setCategoryFilter(state, value) {
    state.categoryFilter = value;
  },
  SET_BOOKS(state, books) {
    state.books = books;
  },
  SET_SUCCESS_MESSAGE(state, message) {
    state.successMessage = message;
  },
  SET_ERROR_MESSAGE(state, message) {
    state.errorMessage = message;
  },
};

const actions = {
  async fetchBooks({ commit, state }) {
    try {
      const books = await bookService.getBooks(state.categoryFilter);
      console.log(books);
      commit("SET_BOOKS", books);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  },

  async reserveBook({ commit, dispatch }, bookId) {
    try {
      await bookService.reserveBook(bookId);
      // Actualizar la lista de libros después de reservar
      dispatch("fetchBooks");
      commit("SET_SUCCESS_MESSAGE", "Book reserved successfully");
    } catch (error) {
      console.error("Error reserving book:", error);
      commit("SET_ERROR_MESSAGE", "Error reserving book");
    }
  },
  // Puedes agregar otras acciones según sea necesario
};

const getters = {
  // Puedes agregar getters según sea necesario
};

export default {
  state,
  mutations,
  actions,
  getters,
  namespaced: true,
};
