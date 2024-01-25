<template>
  <div class="container mt-5">
    <h2 class="mb-4">Iniciar Sesión</h2>
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="email" class="form-label">Usuario:</label>
        <input type="text" v-model="email" class="form-control" required>
      </div>

      <div class="mb-3">
        <label for="password" class="form-label">Contraseña:</label>
        <input type="password" v-model="password" class="form-control" required>
      </div>

      <button type="submit" class="btn btn-primary">Iniciar Sesión</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    ...mapActions('auth', ['login']),

    async submitForm() {
      try {
        await this.login({
          email: this.email,
          password: this.password,
        });

        // Redirigir después del inicio de sesión
        this.$router.push('/view-books');
      } catch (error) {
        // Manejar errores aquí
        console.error(error);
      }
    },
  },
};
</script>
