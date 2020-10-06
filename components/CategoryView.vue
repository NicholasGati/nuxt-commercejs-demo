<template>
  <p>{{ category.name }}</p>
</template>

<script>
export default {
  props: {
    category: { type: Object, defaultValue: {}, required: true },
  },
}
</script>

<style lang="scss" scoped></style>
