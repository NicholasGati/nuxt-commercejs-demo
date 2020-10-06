<template>
  <tr>
    <td class="image-cell"><img :src="item.media.source" /></td>
    <td>{{ item.name }}</td>
    <td>{{ item.price.formatted_with_symbol }}</td>
    <td class="quantity-cell">
      <span>+</span>
      <input
        v-model.number="quantity"
        type="number"
        name="quantity"
        step="1"
        @change="updateQuantity"
      />
    </td>
    <td>{{ item.line_total.formatted_with_symbol }}</td>
    <td>
      <font-awesome-icon v-if="showSpinner" icon="spinner" pulse />
      <font-awesome-icon
        v-else
        class="trash"
        icon="trash"
        @click="removeFromCart(item.id)"
      ></font-awesome-icon>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    item: { type: Object, required: true, defaultValue: {} },
  },
  data() {
    return {
      showSpinner: false,
      quantity: this.item.quantity,
    }
  },
  methods: {
    async removeFromCart(itemId) {
      this.showSpinner = true
      try {
        const res = await this.$commerce.cart.remove(itemId)
        this.$store.commit('setCart', res.cart)
      } catch (error) {
        // eslint-disable-next-line
        console.log(error)
      }
    },
    async updateQuantity() {
      try {
        // eslint-disable-next-line
        console.log(this.item.id, this.quantity)
        const res = await this.$commerce.cart.update(this.item.id, {
          quantity: this.quantity,
        })
        this.$store.commit('setCart', res.cart)
      } catch (error) {
        // eslint-disable-next-line
        console.log(error)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
tr {
  td,
  th {
    padding: 0.5rem;
  }
}

.image-cell {
  max-width: 50px;
}

.quantity-cell {
  input {
    max-width: 50px;
  }
}

.trash {
  cursor: pointer;
  &:hover {
    color: red;
  }
}
</style>
