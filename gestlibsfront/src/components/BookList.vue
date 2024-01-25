<template>
  <div>
    <div v-if="successMessage" class="alert alert-success" role="alert">
      {{ successMessage }}
    </div>

    <!-- Mostrar mensaje de error -->
    <div v-if="errorMessage" class="alert alert-danger" role="alert">
      {{ errorMessage }}
    </div>
    <h2>Lista de Libros</h2>
    <div>
      <label for="categoryFilter">Filtrar por Categoría:</label>
      <select v-model="categoryFilter" @change="filterBooks">
        <option value="">Todas</option>
        <option
          v-for="category in categories"
          :key="category.id"
          :value="category.id"
        >
          {{ category.name }}
        </option>
      </select>
    </div>
    <div class="mt-3">
      <div v-for="book in books.data" :key="book.id" class="card mb-3">
        <div class="card-body">
          <h5 class="card-title">{{ book.book.title }}</h5>
          <p class="card-text">Autor: {{ book.book.author }}</p>
          <p class="card-text">Categoría: {{ book.book.category.name }}</p>
          <p class="card-text">Disponibles: {{ book.available_copies }}</p>
          <button @click="reserveBook(book.id)" class="btn btn-primary">
            Reservar
          </button>
        </div>
      </div>
    </div>
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item" :class="{ disabled: !books.prev_page_url }">
          <a
            class="page-link"
            @click.prevent="fetchPage(books.current_page - 1)"
            href="#"
            >Previous</a
          >
        </li>
        <li
          class="page-item"
          v-for="page in books.links"
          :key="page.url"
          :class="{ active: page.active, disabled: page.url === null }"
        >
          <a
            class="page-link"
            @click.prevent="fetchPage(page.label)"
            href="#"
            >{{ page.label }}</a
          >
        </li>
        <li class="page-item" :class="{ disabled: !books.next_page_url }">
          <a
            class="page-link"
            @click.prevent="fetchPage(books.current_page + 1)"
            href="#"
            >Next</a
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState("book", ["books"]),
    successMessage() {
      return this.$store.state.book.successMessage;
    },
    errorMessage() {
      return this.$store.state.book.errorMessage;
    },
    categories() {
      return [
        { id: 1, name: "Ficción" },
        { id: 2, name: "No Ficción" },
      ];
    },
    categoryFilter: {
      get() {
        return this.$store.state.book.categoryFilter;
      },
      set(value) {
        console.log(value);
        this.$store.commit("book/setCategoryFilter", value);
        this.filterBooks();
      },
    },
  },
  created() {
    // Despachar la acción para obtener los libros
    this.fetchBooks();
  },
  methods: {
    ...mapActions("book", ["fetchBooks", "reserveBook", "fetchPage"]),
    filterBooks() {
      this.fetchBooks(); // Llama a la acción para obtener los libros con el filtro aplicado
    },
  },
};
</script>
