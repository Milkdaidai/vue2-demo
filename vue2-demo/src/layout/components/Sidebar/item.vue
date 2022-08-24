<script>
export default {
  data() {
    return {
      isRed: true,
    };
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
<style lang="scss" scoped></style>
