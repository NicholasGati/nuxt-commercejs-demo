<template>
  <div>
    <Navbar :override-show="true" />
    <div class="container">
      <div class="section">
        <h1 class="title">Products</h1>
        <product-list :products="products"></product-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $commerce }) {
    const { data: products } = await $commerce.products.list()
    return {
      products,
    }
  },
}
</script>

<style lang="scss" scoped>
.container {
  padding-top: 8rem;
  padding-bottom: 4rem;
}
</style>
