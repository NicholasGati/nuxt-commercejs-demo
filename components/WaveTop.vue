<template>
  <div class="wave-top">
    <svg
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 280"
    >
      <path
        class="wave-fill"
        :style="{
          fill: fillColor,
          fillOpacity: 1,
        }"
        d="M0,224L48,197.3C96,171,192,117,288,128C384,139,480,213,576,245.3C672,277,768,267,864,266.7C960,267,1056,277,1152,277.3C1248,277,1344,267,1392,261.3L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      ></path>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    fillColor: { type: String, default: '#FFF', required: true },
  },
}
</script>

<style lang="scss">
.wave-top,
.wave-fill {
  -webkit-transform-origin: center;
  -ms-transform-origin: center;
  transform-origin: center;
  -webkit-transform: rotateY(0deg);
  transform: rotateY(0deg);
}

.wave-top {
  svg {
    width: calc(157% + 1.3px);
    height: 150px;
  }
}
.svg-shadow {
  -webkit-filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.7));
  filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.7));
}
</style>
