import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import app from './modules/app';
import settings from './modules/setting';
import user from './modules/user';
// import { getLanguage } from '@/common/lang';
// import Cookies from 'js-cookie';

Vue.use(Vuex);

// export default new Vuex.Store({
//   state: {
//     language: getLanguage(),
//   },
//   getters: {},
//   mutations: {
//     SET_LANGUAGE: (state, language) => {
//       state.language = language;
//       Cookies.set('language', language);
//     },
//   },
//   actions: {
//     setLanguage({ commit }, language) {
//       commit('SET_LANGUAGE', language);
//     },
//   },
//   modules: {},
// });

const store = new Vuex.Store({
  modules: {
    app,
    settings,
    user,
  },
  getters,
});

export default store;
