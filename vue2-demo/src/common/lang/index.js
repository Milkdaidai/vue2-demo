// src > lang > index.js

import Vue from 'vue';
import VueI18n from 'vue-i18n';
import Cookies from 'js-cookie';
import enLocale from './en'; // 项目中的语言包 英文
import zhLocale from './zh'; // 项目中的语言包 中文

Vue.use(VueI18n);

const messages = {
  en: {
    ...enLocale,
  },
  zh: {
    ...zhLocale,
  },
};
// 获取当前语言环境：考虑到刷新操作，将语言类型存入缓存
export function getLanguage() {
  const chooseLanguage = Cookies.get('language');
  if (chooseLanguage) return chooseLanguage;

  // if has not choose language
  const language = (navigator.language || navigator.browserLanguage).toLowerCase();
  const locales = Object.keys(messages);
  for (const locale of locales) {
    if (language.indexOf(locale) > -1) {
      return locale;
    }
  }
  return 'en';
}
const i18n = new VueI18n({
  locale: getLanguage(),
  messages,
});

export default i18n;
