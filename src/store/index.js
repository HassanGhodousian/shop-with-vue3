import { createStore } from "vuex";
import task from "./modules/taskView.js";
const store = createStore({
  modules: {
    task,
  },
});

export default store;
