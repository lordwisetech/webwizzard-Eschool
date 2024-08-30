import { createRouter, createWebHistory } from 'vue-router';
import landingPage from '@/views/landingPage.vue';
import courseCategory from '@/views/courseCategory.vue';
import lessonPage from '@/views/lessonPage.vue';


import Login from '@/views/login.vue';
import Register from '@/views/register.vue';
import newAssignment from '@/views/newAssignment.vue';
import submit from '@/views/submit.vue';



const routes = [
  {
    path: '/',
    name: 'home',
    component: landingPage
  },
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
    component: Register
  },
  {
    path: '/assignment',
    name: 'assignment',
    component: newAssignment
  },
  {
    path: '/submit',
    name: 'assignsubmitment',
    component: submit
  }

 
];

const router = createRouter({
  history: createWebHistory(), // Removed process.env.BASE_URL
  routes
});

export default router;
