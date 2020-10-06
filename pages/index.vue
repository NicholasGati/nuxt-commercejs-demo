<template>
  <div class="py-0 px-0">
    <Hero />

    <div class="container py-6">
      <!-- <h1>{{ merchant.business_name }}</h1> -->
      <h3 class="title is-1 has-text-weight-light has-text-centered">
        Featured Products
      </h3>
      <product-list
        class="mt-6"
        :products="products.filter((_, i) => i < 8)"
      ></product-list>
    </div>
  </div>
</template>

<script>
// Login: https://authorize.chec.io/login
// Docs: https://commercejs.com/docs/api/#list-event-names
// Docs: https://commercejs.com/docs/sdk/checkout#list-available-shipping-subdivisions
export default {
  // async asyncData({ $commerce }) {
  async asyncData(context) {
    const merchant = await context.$commerce.merchants.about()
    const { data: categories } = await context.$commerce.categories.list()
    const { data: products } = await context.$commerce.products.list()
    return {
      merchant,
      categories,
      products,
    }
  },
}
</script>

<style lang="scss" scoped></style>
