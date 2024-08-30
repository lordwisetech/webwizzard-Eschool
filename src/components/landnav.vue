<template>
    <nav class="navbar navbar-expand-md navbar-dark bg-gray-900 fixed-top p-2">
      <div class="container-fluid d-flex justify-content-between align-items-center">
        <!-- Logo -->
        <a href="#" class="navbar-brand text-white text-2xl ms-4 font-bold">
          <img src="/images/logo.png" class="w-24" alt="Logo">
        </a>
  
        <!-- Desktop Navigation -->
        <div class="d-none d-md-flex space-x-4">
          <a href="/lesson" class="text-white d-flex align-items-center">
            <i class="bi bi-journal-bookmark me-2"></i>
            <button class="btn btn-outline-light">Choose Course</button>
          </a>
          <a href="/takeQuiz" class="text-white d-flex align-items-center">
            <i class="bi bi-pencil-square me-2"></i>
            <button class="btn btn-outline-light">Take Quiz</button>
          </a>
          <a href="/assignment" class="text-white d-flex align-items-center">
            <i class="bi bi-list-task me-2"></i>
            <button class="btn btn-outline-light">TAsk</button>
          </a>
          <a href="/submit" class="text-white d-flex align-items-center">
            <i class="bi bi-file-earmark-arrow-up me-2"></i>
            <button class="btn btn-outline-light">Submit task</button>
          </a>
        </div>
  
        <!-- Mobile Menu Button -->
        <div class="d-md-none">
          <button @click="toggleMenu" class="btn text-white focus:outline-none">
            <i class="bi bi-list"></i>
          </button>
        </div>
      </div>
  
      <!-- Mobile Menu -->
      <div v-if="isMenuOpen" class="mobile-menu d-md-none bg-dark mt-2">
        <a href="/lesson" class="text-white d-flex align-items-center">
          <i class="bi bi-journal-bookmark me-2"></i>
          <button class="btn btn-outline-light">Choose Course</button>
        </a>
        <a href="/takeQuiz" class="text-white d-flex align-items-center">
          <i class="bi bi-pencil-square me-2"></i>
          <button class="btn btn-outline-light">Take Quiz</button>
        </a>
        <a href="/dashboard" class="text-white d-flex align-items-center">
          <i class="bi bi-list-task me-2"></i>
          <button class="btn btn-outline-light">Assignments</button>
        </a>
        <a href="/dashboard" class="text-white d-flex align-items-center">
          <i class="bi bi-file-earmark-arrow-up me-2"></i>
          <button class="btn btn-outline-light">Submit Assignment</button>
        </a>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isMenuOpen: false,
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add padding to the body to prevent content from being hidden behind the fixed navbar */
  body {
    padding-top: 60px; /* Adjust the value if your navbar height is different */
  }
  </style>
  