export const state = () => ({
  cart: null,
  checkoutToken: null,
  isCartOpened: false,
})

export const actions = {}

export const getters = {
  getCartItems(state) {
    return state.cart === null ? [] : state.cart.line_items
  },
  getCartSubtotal(state) {
    return state.cart === null ? 0 : state.cart.subtotal.formatted_with_symbol
  },
  getCartItemCount(state) {
    return state.cart === null ? 0 : state.cart.total_items
  },
  getHostedCheckoutUrl(state) {
    return state.cart === null ? '' : state.cart.hosted_checkout_url
  },
}

export const mutations = {
  setCart(state, cart) {
    state.cart = cart
  },
  setCartView(state, isOpened) {
    state.isCartOpened = isOpened
  },
}
