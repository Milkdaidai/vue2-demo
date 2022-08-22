import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
/*Layout */
import Layout from '@/layout/Index.vue';
const routes = [
  {
    path: '/login',
    name: 'loginIndex',
    component: () => import('@/views/login/loginIndex.vue'),
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashboard/dashboardIndex.vue'),
        meta: { title: 'Dashboard', icon: 'dashboard' },
      },
    ],
  },
  { path: '*', redirect: '/login', hidden: true },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
