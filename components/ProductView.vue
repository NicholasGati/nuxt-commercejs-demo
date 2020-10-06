<template>
  <div class="card">
    <div class="card-image">
      <picture class="image"
        ><source :srcset="product.media.source" media="(max-width: 1023px)" />
        <source :srcset="product.media.source" media="(min-width: 1024px)" />
        <img
          :src="product.media.source"
          width="216"
          height="326"
          alt="Cotton Sweater"
          style=""
      /></picture>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-5">{{ product.name }}</p>
          <p class="subtitle is-6 mb-2">
            {{ product.price.formatted_with_symbol }}
          </p>
          <Stars :rating="4" />
          <hr class="my-4" />
          <nuxt-link :to="`products/${product.permalink}`" class="mr-3">
            <button class="button is-small is-light">Product Details</button>
          </nuxt-link>

          <AddToCartBtn :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: { type: Object, defaultValue: {}, required: true },
  },
}
</script>

<style lang="scss" scoped></style>
