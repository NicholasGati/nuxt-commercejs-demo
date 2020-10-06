<template>
  <div class="columns is-multiline">
    <div
      v-for="product in products"
      :key="product.permalink"
      class="column is-3-desktop is-4-tablet is-12-mobile"
    >
      <hr />
      <product-view :product="product"></product-view>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    products: { type: Array, defaultValue: [], required: true },
  },
}
</script>
