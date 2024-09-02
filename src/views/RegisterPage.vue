<template>
  <div class="register text-white">
    <h2>Register</h2>
    <form @submit.prevent="register">
      <div>
        <label>Username:</label>
        <input type="text" v-model="username" required />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">Register</button>
    </form>
    <p class="text-white" v-if="message">{{ message }}</p>
  </div>
</template>

<script>
import AuthService from '@/services/Authservice';


export default {
  data() {
    return {
      username: '',
      password: '',
      message: '',
    };
  },
  methods: {
    async register() {
      try {
        const response = await AuthService.register({
          username: this.username,
          password: this.password,
        });
        this.message = response.data.message;
      } catch (error) {
        this.message = error.response.data.message;
      }
    },
  },
};
</script>
