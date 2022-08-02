import Vue from 'vue';
import Vuex from 'vuex';
import { getLanguage } from '@/common/lang';
import Cookies from 'js-cookie';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    language: getLanguage(),
  },
  getters: {},
  mutations: {
    SET_LANGUAGE: (state, language) => {
      state.language = language;
      Cookies.set('language', language);
    },
  },
  actions: {
    setLanguage({ commit }, language) {
      commit('SET_LANGUAGE', language);
    },
  },
  modules: {},
});
