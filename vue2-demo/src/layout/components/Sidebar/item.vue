<script>
export default {
  props: {
    isRed: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    console.log('this.isRed', this.isRed);
  },
  render(h) {
    return h(
      'div',
      {
        class: {
          'is-red': this.isRed,
        },
      },
      [h('p', '这是个render事例')]
    );
  },
};
</script>
<style lang="scss" scoped>
.is-red {
  color: red;
}
</style>
