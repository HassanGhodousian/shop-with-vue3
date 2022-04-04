import Swal from "sweetalert2";
function updatLocalStorege(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}
const cart = {
  namespaced: true,

  state: {
    cart: localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [],
  },
  getters: {
    count(state) {
      return state.cart.length;
    },

    allItem(state) {
      return state.cart;
    },

    totalAmount(state) {
      return state.cart.reduce((total, p) => {
        console.log("total:", total, "p :", p);
        return total + p.price * p.quantity;
      }, 0);
    },
  },
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
      updatLocalStorege(state.cart);
    },

    decrement(state, id) {
      const item = state.cart.find((p) => p.id == id);
      if (item) {
        if (item.quantity > 1) {
          item.quantity--;
          Swal.fire({
            position: "top",
            icon: "success",
            title: " product updated",
            showConfirmButton: false,
            timerProgressBar: true,
            toast: true,
            timer: 3000,
          });
        }
      }
      updatLocalStorege(state.cart);
    },

    increment(state, id) {
      const item = state.cart.find((p) => p.id == id);
      if (item) {
        item.quantity++;
        Swal.fire({
          position: "top",
          icon: "success",
          title: " product updated",
          showConfirmButton: false,
          timerProgressBar: true,
          toast: true,
          timer: 3000,
        });
      }
      updatLocalStorege(state.cart);
    },

    remove(state, id) {
      state.cart = state.cart.filter((cart) => cart.id != id);
      updatLocalStorege(state.cart);
    },

    clear(state) {
      state.cart = [];
      updatLocalStorege(state.cart);
    },
  },
  actions: {
    addToCart({ commit }, product) {
      commit("add", product);
      Swal.fire({
        position: "top",
        icon: "success",
        title: " product added",
        showConfirmButton: false,
        timerProgressBar: true,
        toast: true,
        timer: 3000,
      });
    },

    remove({ commit }, id) {
      commit("remove", id);
      Swal.fire({
        position: "top",
        icon: "warning",
        title: " product Deleted",
        showConfirmButton: false,
        timerProgressBar: true,
        toast: true,
        timer: 3000,
      });
    },

    clear({ commit }) {
      commit("clear");
      Swal.fire({
        position: "top",
        icon: "warning",
        title: " cart Empty",
        showConfirmButton: false,
        timerProgressBar: true,
        toast: true,
        timer: 3000,
      });
    },

    increment({ commit }, id) {
      commit("increment", id);
    },

    decrement({ commit }, id) {
      commit("decrement", id);
    },
  },

  modules: {},
};
export default cart;
