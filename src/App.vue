<template>
    <router-view></router-view>
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  
  onMounted(() => {
    console.log('App mounted');
  });
  </script>