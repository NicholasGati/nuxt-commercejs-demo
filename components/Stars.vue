<template>
  <div>
    <font-awesome-icon
      v-for="(index, i) in 5"
      :key="`star-${i}`"
      :icon="['fas', 'star']"
      :class="{
        'has-text-warning': i + 1 <= parseInt(rating),
        'has-text-grey': i + 1 > parseInt(rating),
      }"
    ></font-awesome-icon>
  </div>
</template>

<script>
export default {
  props: {
    rating: { type: Number, required: true },
  },
}
</script>
