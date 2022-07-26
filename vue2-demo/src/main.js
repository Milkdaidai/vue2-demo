import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/styles/index.scss'; // global css
import 'normalize.css/normalize.css'; // A modern alternative to CSS resets
// import ElementUI from 'element-ui';
Vue.config.productionTip = false;
// set ElementUI lang to EN
// Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');