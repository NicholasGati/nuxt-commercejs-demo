<template>
  <section class="hero is-transparent purple-gradient">
    <div class="hero-head py-4">
      <Navbar :override-show="false" />
    </div>

    <!-- Hero Image and Title -->
    <div class="hero-body">
      <div class="columns is-vcentered has-text-centered-mobile">
        <!-- Landing page Title -->
        <div class="column is-5">
          <h1
            class="title has-text-white is-size-1 is-size-3-mobile has-text-weight-semibold is-spaced main-title"
          >
            Your one-stop shop for electronics
          </h1>
          <h2 class="subtitle has-text-white is-5 has-text-weight-light">
            The #1 rated online electronics supplier in the northeast.
          </h2>
          <hr class="short" />
          <!-- CTA -->
          <ButtonLink
            location="/products"
            text="Browse Products"
            icon=""
            :slanted="false"
          />
        </div>
        <!-- Hero image -->
        <div class="column is-7 has-text-centered">
          <img src="~static/images/technology.svg" alt="" class="hero-image" />
        </div>
      </div>
    </div>
    <div class="hero-foot">
      <WaveBottom fill-color="#fff" />
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.hero {
  .hero-body {
    padding: 3rem;

    img {
      width: 75%;
      height: auto;
    }
  }
}

@include mobile {
  .hero {
    .hero-body {
      padding: 5rem 3rem;
    }
  }
}
</style>
