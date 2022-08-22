<template>
  <div>
    <logo v-if="false" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu :default-active="activeMenu"></el-menu>
    </el-scrollbar>
  </div>
</template>
<script>
import Logo from './Logo.vue';
export default {
  components: { Logo },
  computed: {
    activeMenu() {
      const route = this.$route;
      const { path } = route;
      console.log('111', route);
      return path;
    },
  },
};
</script>
<style lang="less" scoped></style>
