<template>
  <div class="mobile-cart-menu py-5 px-2 is-hidden-tablet" @click="setCartView">
    <div
      class="columns is-mobile has-text-white is-vcentered has-text-centered"
    >
      <div class="column is-one-third">
        <font-awesome-icon
          :icon="['fas', 'shopping-cart']"
          class="has-text-white"
        ></font-awesome-icon>
      </div>
      <div class="column is-one-third">
        <transition name="fade">
          <span class="has-text-weight-semibold"
            >{{ cartCount }} Item<span v-if="parseInt(cartCount) != 1"
              >s</span
            ></span
          >
        </transition>
      </div>
      <div class="column is-one-third">
        <transition name="fade">
          <span class="has-text-weight-semibold">{{ cartSubtotal }}</span>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
.mobile-cart-menu {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
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

  .column {
    &:nth-child(1),
    &:nth-child(2) {
      border-right: 1px solid rgba(255, 255, 255, 0.3);
    }
  }
}
</style>
