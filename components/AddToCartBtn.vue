<template>
  <button
    :class="{
      button: true,
      'is-small': true,
      'gati-button': true,
      'has-text-white': true,
      slanted: false,
    }"
    @click="addToCart"
  >
    <span class="text">
      <font-awesome-icon
        :icon="['fas', 'cart-plus']"
        class="has-text-white"
      ></font-awesome-icon
      >&nbsp; Add to cart</span
    >
    <span></span>
  </button>
</template>

<script>
export default {
  props: {
    product: { type: Object, required: true, defaultValue: {} },
  },
  methods: {
    async addToCart() {
      try {
        const res = await this.$commerce.cart.add(this.product.id)
        this.$store.commit('setCart', res.cart)
      } catch (error) {
        // eslint-disable-next-line
        console.log(error)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.gati-button {
  position: relative;
  -webkit-transition: all 0.6s ease-out !important;
  transition: all 0.6s ease-out !important;
  border: none !important;
  background: #7f00ff;
  background: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(#7f00ff),
    to(#3f00fc)
  ) !important;
  background: linear-gradient(to top, #7f00ff, #3f00fc) !important;
  opacity: 1;
  z-index: 0;

  &:hover {
    transform: scale(1.04);
  }

  &.slanted {
    transform: skewX(-18deg);

    .text {
      transform: skewX(18deg);
    }
  }
}
</style>
