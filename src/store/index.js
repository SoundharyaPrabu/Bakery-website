import { createStore } from 'vuex';

export default createStore({
  state: {
    cart: []
  },
  mutations: {
    ADD_TO_CART(state, product) {
      state.cart.push(product);
    },
    REMOVE_FROM_CART(state, product) {
    const index = state.cart.findIndex(
      item => item.name === product.name && item.price === product.price
    );
    if (index !== -1) {
      state.cart.splice(index, 1);
    }
  }
  },
  getters: {
    cartItems(state) {
      return state.cart;
    },
    cartItemCount(state) {
      return state.cart.length;
    }
  }
});
