import defaultSettings from '@/settings';

const { showSettings, fixedHeader, sidebarLogo } = defaultSettings;

const state = {
  showSettings: showSettings,
  fixedHeader: fixedHeader,
  sidebarLogo: sidebarLogo,
};

export default {
  namespaced: true,
  state,
  // mutations,
  // actions
};
