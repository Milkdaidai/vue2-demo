<template>
  <div class="layout-main">
    <sidebar class="sidebar-container" />
    <div class="main-container">
      <div class="">
        <navbar />
      </div>
      <div>
        <item :isRed="isRed"></item>
        <el-button @click="changeColor()"></el-button>
      </div>
    </div>
  </div>
</template>
<script>
import { Navbar, Sidebar } from './components';
import Item from './components/Sidebar/item.vue';
export default {
  name: 'Layout',
  components: {
    Navbar,
    Sidebar,
    Item,
  },
  data() {
    return {
      isRed: false,
    };
  },
  methods: {
    changeColor() {
      this.isRed = !this.isRed;
    },
  },
};
</script>
<style lang="scss" scoped>
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
.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  transition: width 0.28s;
}
</style>
