<template>
  <ul>
    <li v-for="category in categories" :key="category.slug">
      <nuxt-link :to="category.slug"
        ><category-view :category="category"></category-view
      ></nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    categories: { type: Array, defaultValue: [], required: true },
  },
}
</script>

<style lang="scss" scoped></style>
