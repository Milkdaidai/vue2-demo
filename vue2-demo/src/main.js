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
Vue.config.productionTip = false;
//i18n设置
Vue.use(VueI18n);
/*----------使用VueI18n-----------*/
const i18n = new VueI18n({
  locale: 'zh',
  messages: {
    // zh: require('./common/lang/zh'),
    // en: require('./common/lang/en'),
  },
});
// set ElementUI lang to EN
Vue.use(ElementUI);
new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
