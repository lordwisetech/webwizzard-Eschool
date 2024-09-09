<template>
  <div>
    <h1>Register</h1>
    <form @submit.prevent="register">
      <label for="username">Username:</label>
      <input type="text" id="username" v-model="username" />
      <br />
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" />
      <br />
      <button type="submit">Register</button>
    </form>
    <p v-if="success">User created successfully!</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      success: false
    }
  },
  methods: {
    register() {
      axios.post('http://localhost:3000/register', {
        username: this.username,
        password: this.password
      })
      .then(response => {
        this.success = true;
      })
      .catch(error => {
        console.error(error);
      });
    }
  }
}
</script>