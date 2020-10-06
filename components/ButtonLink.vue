<template>
  <nuxt-link :to="location">
    <button
      :class="{
        button: true,
        'gati-button': true,
        'has-text-white': true,
        slanted: slanted,
      }"
    >
      <span class="text">
        <span v-if="icon.length > 0"
          ><font-awesome-icon
            :icon="['fas', icon]"
            class="has-text-white"
          ></font-awesome-icon
          >&nbsp;</span
        >{{ text }}</span
      >
    </button>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    slanted: { type: Boolean, required: true, defaultValue: false },
    text: { type: String, required: true, defaultValue: '' },
    location: { type: String, required: true, defaultValue: '' },
    icon: { type: String, required: true, defaultValue: '' },
  },
}
</script>

<style lang="scss" scoped>
.gati-button {
  position: relative;
  -webkit-transition: all 0.6s ease-out !important;
  transition: all 0.6s ease-out !important;
  border: none !important;
  background: #7f00ff;
  background: -webkit-gradient(
    linear,
    left bottom,
    left top,
    from(#7f00ff),
    to(#3f00fc)
  ) !important;
  background: linear-gradient(to top, #7f00ff, #3f00fc) !important;
  opacity: 1;
  z-index: 0;

  &.slanted {
    transform: skewX(-18deg);

    .text {
      transform: skewX(18deg);
    }
  }
}
</style>
