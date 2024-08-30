<script setup>
import {ref} from 'vue'
import landnav from '../components/landnav.vue'
import foooter from '@/components/footer.vue'
import profile from '@/components/userDASHBOARD/profile.vue';
import courseCategory from '@/components/userDASHBOARD/courseCategory.vue';
import SideNav from '@/components/sideNav.vue';


</script>


<template>
    <landnav></landnav>
  <profile></profile>
   <courseCategory></courseCategory>
   <foooter></foooter>
</template>
