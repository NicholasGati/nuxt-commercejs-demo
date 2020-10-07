<template>
  <div class="mobile-cart-menu is-hidden-tablet">
    <CartButton :slanted="false" class="menu" />
  </div>
</template>

<style lang="scss" scoped>
.mobile-cart-menu {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 0;

  .menu {
    width: 100%;
  }
}
</style>
