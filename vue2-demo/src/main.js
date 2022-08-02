import Vue from 'vue';
import 'normalize.css/normalize.css'; // A modern alternative to CSS resets
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/styles/index.scss'; // global css
import '@/icons'; // icon
import '@/styles/index.scss'; // global css
import VueI18n from 'vue-i18n';
import i18n from './common/lang';
Vue.config.productionTip = false;
Vue.use(VueI18n);
// set ElementUI lang to EN
Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value),
});
new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
