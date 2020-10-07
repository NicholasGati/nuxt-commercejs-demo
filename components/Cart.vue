<template>
  <div
    :class="{
      container: true,
      cart: true,
      opened: opened,
      'has-background-white': true,
      shadow: true,
    }"
  >
    <div class="columns is-multiline">
      <div class="column is-12 px-6 py-6 has-background-light">
        <CartButton :slanted="true" />
      </div>

      <div class="column is-12 px-6 py-6 has-text-weight-light">
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Unit Price</th>
              <th>Quantity</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <th></th>
              <th></th>
              <th>Subtotal:</th>
              <th>{{ cartSubtotal }}</th>
              <th></th>
            </tr>
          </tfoot>
          <tbody>
            <CartItem v-for="item in items" :key="item.id" :item="item" />
            <tr v-if="items.length === 0" class="empty">
              <td></td>
              <td></td>
              <td></td>
              <td class="has-text-grey is-italic py-5">Cart is empty</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="column is-12 has-text-right px-6 py-6 my-6">
        <a :href="checkoutUrl">
          <button class="button is-success">
            Go to checkout &nbsp;
            <font-awesome-icon
              :icon="['fas', 'sign-in-alt']"
            ></font-awesome-icon>
          </button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    items() {
      return this.$store.getters.getCartItems
    },
    cartSubtotal() {
      return this.$store.getters.getCartSubtotal
    },
    opened() {
      return this.$store.state.isCartOpened
    },
    checkoutUrl() {
      return this.$store.getters.getHostedCheckoutUrl
    },
  },
}
</script>

<style lang="scss" scoped>
.cart {
  width: 600px;
  height: 100vh;
  overflow-y: auto;
  position: fixed;
  top: 0;
  right: -610px;
  z-index: 100;
  transition: all 1s ease;

  &.opened {
    right: 0;
  }

  table {
    width: 100%;
    background: transparent;

    tr {
      td,
      th {
        font-weight: 400;
        padding: 0.5rem;
      }
    }

    tfoot {
      border-top: 1px solid #f5f5f5;
    }
  }
}

@include mobile {
  .cart {
    width: 100vw;
    right: -105vw;
  }
}
</style>
