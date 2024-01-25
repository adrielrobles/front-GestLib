// src/services/bookService.js
import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000'; // Reemplaza con la URL de tu backend

export default {
  getBooks: async (categoryFilter = null, page = 1) => {
    const url = categoryFilter
      ? `${BASE_URL}/api/books?category_id=${categoryFilter}&page=${page}`
      : `${BASE_URL}/api/books?page=${page}`;
  
    const response = await axios.get(url);
    return response.data;
  },
  

  reserveBook: async (bookId) => {
    const data = {
      user_id: 1,
      library_section_id:bookId
    };
    const url = `${BASE_URL}/api/rents`;
    const response = await axios.post(url, data);
    return response.data;
  },
};
