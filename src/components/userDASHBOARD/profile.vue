<script setup>
import {ref} from 'vue'
const pagename = ref("THIS IS YOUR DASHBOARD")
</script>

<template>
  <div class="container-span bg-dark pt-5 ml-3 mt-4">
  <div class="flex justify-between ">
    <!-- Left Section (Image, Name, Status) -->
    <div class="flex flex-col items-start ">
     
      <p class="text-base font-bold text-white font-pj">Welcome</p>
      
      <div class="flex items-center pb-3">
        <p class="text-white"> Status:</p>
        <p class="bg-success w-2 h-2 ml-1 rounded-full"></p>
      </div>
    </div>
   
   
    
  </div>
</div>


</template>