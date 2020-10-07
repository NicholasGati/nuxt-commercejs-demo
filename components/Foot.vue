<template>
  <div class="footer has-background-light">
    <div class="content has-text-centered">
      <div class="columns is-multiline">
        <div class="column is-6">
          <h4 class="title">Site</h4>
          <p class="has-text-weight-light footer-item">
            <nuxt-link to="/">Home</nuxt-link>
          </p>
          <p class="has-text-weight-light footer-item">
            <nuxt-link to="/products">Products</nuxt-link>
          </p>
          <p class="has-text-weight-light footer-item">
            <nuxt-link to="/contact">Contact</nuxt-link>
          </p>
        </div>
        <div class="column is-6">
          <h4 class="title">Company</h4>
          <p class="has-text-weight-light footer-item">Purple Hippo Inc.</p>
          <p class="has-text-weight-light footer-item">123 Main St.</p>
          <p class="has-text-weight-light footer-item">Dix Hills, NY 11729</p>
        </div>
        <div class="column is-12">
          <div class="mt-3 has-text-grey">
            <hr />
            <p class="is-size-7 mb-1">
              This website was built for demonstration purposes only and is not
              intended for real usage.
            </p>
            <p class="is-size-7 mb-1">
              The images on this website are used as placeholders for example
              products and are not products that we sell. All images are from
              <a href="https://unsplash.com/" target="_blank"
                >https://unsplash.com/</a
              >
            </p>
            <p class="is-size-7 mb-1">
              All credit card transactions do not go through. This test website
              is in sandbox mode.
            </p>
            <p class="copyright is-size-7 mb-1">
              <font-awesome-icon :icon="['fas', 'copyright']" />
              <span>{{ currentYear }}</span> Gati Consulting LLC
            </p>
            <p class="is-size-7">
              Website by
              <a class="" href="https://www.gaticonsulting.com" target="_blank"
                >Gati Consulting LLC</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const getYear = () => new Date().getFullYear()

export default {
  data() {
    return {
      currentYear: getYear(),
    }
  },
}
</script>

<style lang="scss" scoped>
.footer {
  padding: 4rem;
}

@include mobile {
  .footer {
    padding-bottom: 6rem;
  }
}
</style>
