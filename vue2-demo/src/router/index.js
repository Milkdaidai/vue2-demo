import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'loginIndex',
    component: () => import('@/views/login/loginIndex.vue'),
  },
  {
    path: '/dashboard',
    name: 'dashboaed',
    component: () => import('@/views/dashboard/dashboardIndex.vue'),
  },
  { path: '*', redirect: '/login', hidden: true },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
