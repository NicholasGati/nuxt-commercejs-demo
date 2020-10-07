<template>
  <button
    :class="{
      columns: true,
      button: true,
      'gati-button': true,
      'has-text-white': true,
      slanted: slanted,
    }"
    @click="setCartView"
  >
    <span class="text">
      <font-awesome-icon
        :icon="['fas', 'shopping-cart']"
        class="has-text-white"
      ></font-awesome-icon>
      <span class="border mx-2"></span>
      <transition name="fade">
        <span
          >{{ cartCount }} Item<span v-if="parseInt(cartCount) != 1"
            >s</span
          ></span
        >
      </transition>
      <span class="border mx-2"></span>
      <transition name="fade">
        <span>{{ cartSubtotal }}</span>
      </transition>
    </span>
  </button>
</template>

<script>
export default {
  props: {
    slanted: { type: Boolean, required: true, defaultValue: true },
  },
  computed: {
    cartCount() {
      return this.$store.getters.getCartItemCount
    },
    cartSubtotal() {
      return this.$store.getters.getCartSubtotal
    },
  },
  methods: {
    setCartView() {
      const isOpened = this.$store.state.isCartOpened
      this.$store.commit('setCartView', !isOpened)
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

  &.slanted {
    transform: skewX(-18deg);

    .text {
      transform: skewX(18deg);
      font-size: 0.8rem;

      .border {
        border-right: 1px solid #ccc;
      }
    }
  }
}
</style>
