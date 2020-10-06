<template>
  <div class="wave-bottom">
    <svg
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
    >
      <path
        fill="#0099ff"
        fill-opacity="1"
        class="wave-fill svg-shadow"
        :style="{
          fill: fillColor,
          fillOpacity: 1,
        }"
        d="M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,218.7C672,213,768,139,864,128C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
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
.wave-bottom,
.wave-fill {
  -webkit-transform-origin: center;
  -ms-transform-origin: center;
  transform-origin: center;
  -webkit-transform: rotateY(0deg);
  transform: rotateY(0deg);
}

.wave-bottom {
  overflow: hidden;
  transform: translateY(6px);
}

.wave-bottom svg {
  width: calc(157% + 1.3px);
  height: 120px;
}

.svg-shadow {
  -webkit-filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.7));
  filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.7));
}

// d="M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,218.7C672,213,768,139,864,128C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
</style>
