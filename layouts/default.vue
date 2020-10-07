<template>
  <div>
    <Nuxt />
    <Foot />
    <Cart />
    <MobileCartMenu />
  </div>
</template>

<script>
export default {
  mounted() {
    this.fetchCart()
  },
  methods: {
    async fetchCart() {
      try {
        const cart = await this.$commerce.cart.retrieve()
        this.$store.commit('setCart', cart)
      } catch (error) {
        // eslint-disable-next-line
        console.log('Error (default.vue): ', error)
      }
    },
  },
}
</script>

<style lang="scss">
body {
  font-family: 'Cabin Condensed', sans-serif;
  overflow-x: hidden;
}

hr {
  border: 1px solid #310085;
  opacity: 0.5;

  &.short {
    width: 50%;
  }
}

.purple-gradient {
  background: rgb(49, 0, 133);
  background: -moz-linear-gradient(
    90deg,
    rgba(49, 0, 133, 1) 30%,
    rgba(28, 0, 76, 1) 100%
  );
  background: -webkit-linear-gradient(
    90deg,
    rgba(49, 0, 133, 1) 30%,
    rgba(28, 0, 76, 1) 100%
  );
  background: linear-gradient(
    90deg,
    rgba(49, 0, 133, 1) 30%,
    rgba(28, 0, 76, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#310085",endColorstr="#1c004c",GradientType=1);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.shadow {
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15), 0 2px 2px rgba(0, 0, 0, 0.15),
    0 4px 4px rgba(0, 0, 0, 0.15), 0 8px 8px rgba(0, 0, 0, 0.15);
}

.shadow-shorter {
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.11), 0 2px 2px rgba(0, 0, 0, 0.11),
    0 4px 4px rgba(0, 0, 0, 0.11), 0 6px 8px rgba(0, 0, 0, 0.11),
    0 8px 16px rgba(0, 0, 0, 0.11);
}
</style>
