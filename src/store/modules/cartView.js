// import axios from "axios";
// import Swal from "sweetalert2";
const cart = {
  namespaced: true,

  state: {
    cart: [],
  },
  getters: {},
  mutations: {
    add(state, product) {
      const item = state.cart.find((p) => p.id == product.id);
      if (!item) {
        state.cart.push({
          ...product,
          quantity: 1,
        });
      } else {
        item.quantity++;
      }
      console.log(state.cart);
    },
  },
  actions: {
    addToCart({ commit }, product) {
      commit("add", product);
    },
  },

  modules: {},
};
export default cart;
