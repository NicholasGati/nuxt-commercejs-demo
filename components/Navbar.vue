<template>
  <nav class="navbar is-fixed-top py-3">
    <WaveTop
      :class="{
        show: showNavBg || overrideShow,
      }"
      fill-color="#1D004F"
    />
    <div class="container">
      <!-- Brand -->
      <div class="navbar-brand">
        <nuxt-link to="/" class="navbar-item">
          <span class="brand-name has-text-white"
            ><font-awesome-icon :icon="['fas', 'hippo']"></font-awesome-icon
            >&nbsp; <span class="has-text-weight-bold">Purple Hippo</span></span
          >
        </nuxt-link>

        <!-- Responsive toggle -->
        <span
          :class="{
            'navbar-burger': true,
            burger: true,
            'is-active': mobileNav,
          }"
          data-target="navbarMenu"
          @click="toggleMobileNav"
        >
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>

      <!-- Menu -->
      <NavMenu :mobile-nav="mobileNav" />
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    overrideShow: { type: Boolean, required: true, defaultValue: false },
  },
  data() {
    return {
      showNavBg: false,
      mobileNav: false,
    }
  },
  mounted() {
    // Initial check for scrollY
    this.handleScroll()

    // Event listener check for scrollY
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.showNavBg = window.scrollY >= 100
    },
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav
    },
  },
}
</script>

<style lang="scss" scoped>
.wave-top {
  transition: all 1s ease-in-out;
  position: fixed;
  top: -500px;
  left: 0;
  right: 0;
}

.show {
  top: 0;
}

nav {
  transition: all 250ms ease-in-out;
}
</style>
