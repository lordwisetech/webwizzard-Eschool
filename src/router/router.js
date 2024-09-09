import { createRouter, createWebHistory } from 'vue-router';
import landingPage from '@/views/landingPage.vue';
import courseCategory from '@/views/courseCategory.vue';
import lessonPage from '@/views/lessonPage.vue';


import Login from '@/views/login.vue';
import Register from '@/views/register.vue';
import RegisterPage from '@/views/RegisterPage.vue';
import newAssignment from '@/views/newAssignment.vue';
import submit from '@/views/submit.vue';
import upload from '@/views/upload.vue';
import imguplod from '@/views/imguplod.vue';
import home from '@/views/home.vue';


const routes = [
  
  {
    path: '/category/:name',
    name: 'dasboard',
    component:  lessonPage
  },
 
  {
    path: '/lesson',
    name: 'lesson',
    component: courseCategory
  },

  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterPage
  },
  {
    path: '/',
    name: '',
    component: landingPage
  },
  {
    path: '/submit',
    name: 'assignsubmitment',
    component: submit
  },
  {
    path: '/upload',
    name: '',
    component: imguplod
  },

 
];

const router = createRouter({
  history: createWebHistory(), // Removed process.env.BASE_URL
  routes
});

export default router;
