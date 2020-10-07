<template>
  <div
    id="navbarMenu"
    :class="{
      'navbar-menu': true,
      'light-menu': true,
      'is-active': mobileNav,
    }"
  >
    <div class="navbar-end">
      <!-- Menu item -->
      <div
        v-for="page in pages"
        :key="page.key"
        class="navbar-item is-nav-link"
      >
        <nuxt-link
          :to="page.url"
          :class="{
            'has-text-white': !mobileNav,
            'has-text-black': mobileNav,
          }"
          >{{ page.name }}</nuxt-link
        >
      </div>

      <div class="navbar-item">
        <CartButton :slanted="true" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    mobileNav: { type: Boolean, defaultValue: false, required: true },
  },
  data() {
    return {
      pages: [
        {
          url: '/',
          name: 'Home',
          key: 'home',
        },
        {
          url: '/products',
          name: 'Products',
          key: 'products',
        },
        {
          url: '/contact',
          name: 'Contact',
          key: 'contact',
        },
      ],
    }
  },
}
</script>
