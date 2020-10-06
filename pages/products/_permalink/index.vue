<template>
  <div class="py-0 px-0">
    <Navbar :override-show="true" />
    <div class="container">
      <div class="columns is-multiline">
        <div class="column is-6">
          <picture class="image"
            ><source
              :srcset="product.media.source"
              media="(max-width: 1023px)" />
            <source
              :srcset="product.media.source"
              media="(min-width: 1024px)" />
            <img
              :src="product.media.source"
              width="216"
              height="326"
              alt="Cotton Sweater"
              style=""
          /></picture>
        </div>
        <div class="column is-6 py-6 px-6">
          <p class="title is-4">{{ product.name }}</p>
          <!-- eslint-disable-next-line -->
          <p v-html="product.description"></p>
          <p>
            {{ product.price.formatted_with_symbol }}
          </p>
          <Stars :rating="4" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ params, $commerce }) {
    const { permalink } = params
    const product = await $commerce.products.retrieve(permalink, {
      type: 'permalink',
    })
    return { product }
  },
}
</script>

<style lang="scss" scoped>
.container {
  padding-top: 8rem;
  padding-bottom: 4rem;
}

@include mobile {
  padding-top: 10rem;
}
</style>
