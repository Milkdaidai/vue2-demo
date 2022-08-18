<template>
  <div class="layout-main">
    <div class="menu-div"></div>
    <navbar />
  </div>
</template>
<script>
import { Navbar } from './components';
export default {
  name: 'Layout',
  components: {
    Navbar,
  },
};
</script>
<style lang="scss">
.layout-main {
  width: 100%;
  height: 100%;
  .menu-div {
    width: 20%;
    height: 100%;
    float: left;
    border-right: 1px solid rgba(0, 21, 41, 0.08);
  }
}
</style>
>
