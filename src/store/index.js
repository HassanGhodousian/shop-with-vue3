import { createStore } from "vuex";
import task from "./modules/taskView.js";
import products from "./modules/productsView.js";
import cart from "./modules/cartView.js";

const store = createStore({
  modules: {
    task,
    products,
    cart,
  },
});

export default store;
