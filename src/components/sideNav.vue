<template>
  <nav class="navbar navbar-expand-md bg-dark navbar-dark p-2">
    <div class="container-fluid">
      <!-- Logo -->
      <a class="navbar-brand ms-4" href="#">
        <img src="/images/logo.png" alt="Logo" class="d-inline-block align-text-top" style="width: 100px;">
      </a>

      <!-- Toggler for mobile view -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Navbar content -->
      <div class="collapse navbar-collapse" id="navbarContent">
        <!-- Left side - Search bar -->
        <form class="d-flex ms-auto me-4">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-light" type="submit">Search</button>
        </form>

        <!-- Right side - Buttons -->
        <ul class="navbar-nav ms-auto">
          <li class="nav-item me-3">
            <a href="/dashboard">
              <button class="btn btn-light">Start Learning</button>
            </a>
          </li>
          <li class="nav-item">
            <button class="btn btn-outline-light">Login</button>
          </li>
          <li class="nav-item ms-2">
            <button class="btn btn-light">Sign Up</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavbarComponent",
};
</script>

<style scoped>
/* Custom styles can be added here if needed */
</style>
