import axios from "axios";
import Swal from "sweetalert2";
const task = {
  namespaced: true,
  state: {
    tasks: [],
  },
  getters: {
    allTasks(state) {
      return state.tasks;
    },
  },
  mutations: {
    setTasks(state, tasks) {
      state.tasks = tasks;
    },

    newTask(state, task) {
      state.tasks.unshift(task);
    },

    updateTask(state, updatetask) {
      const index = state.tasks.findIndex((task) => task.id == updatetask.id);
      if (index != -1) {
        state.tasks.splice(index, 1, updatetask);
      }
    },

    removeTask(state, id) {
      state.tasks = state.tasks.filter((task) => task.id != id);
    },
  },
  actions: {
    async fetchTasks({ commit }) {
      await axios
        .get("https://jsonplaceholder.typicode.com/todos")
        .then(function (response) {
          commit("setTasks", response.data);
        })
        .catch(function (error) {
          Swal.fire({
            title: error,
            text: "Do you want to continue",
            icon: "error",
            confirmButtonText: "Cool",
          });
        })
        .then(function () {
          // always executed
        });
    },

    async filterTasks({ commit }, limit) {
      await axios
        .get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)
        .then(function (response) {
          commit("setTasks", response.data);
        })
        .catch(function (error) {
          Swal.fire({
            title: error,
            text: "Do you want to continue",
            icon: "error",
            confirmButtonText: "Cool",
          });
        })
        .then(function () {
          // always executed
        });
    },

    async storeTask({ commit }, tasks) {
      await axios
        .post("https://jsonplaceholder.typicode.com/todos", {
          title: tasks,
          completed: false,
        })
        .then(function (response) {
          commit("newTask", response.data);
          Swal.fire({
            position: "top",
            icon: "success",
            title: " task added",
            showConfirmButton: false,
            timerProgressBar: true,
            toast: true,
            timer: 3000,
          });
        })
        .catch(function (error) {
          Swal.fire({
            title: error,
            text: "Do you want to continue",
            icon: "error",
            confirmButtonText: "Cool",
          });
        })
        .then(function () {
          // always executed
        });
    },

    async updateTask({ commit }, tasks) {
      await axios
        .put(`https://jsonplaceholder.typicode.com/todos/${tasks.id}`, {
          id: tasks.id,
          title: tasks.title,
          completed: !tasks.completed,
        })
        .then(function (response) {
          commit("updateTask", response.data);
          Swal.fire({
            position: "top",
            icon: "success",
            title: " task updated",
            showConfirmButton: false,
            timerProgressBar: true,
            toast: true,
            timer: 3000,
          });
        })
        .catch(function (error) {
          Swal.fire({
            title: error,
            text: "Do you want to continue",
            icon: "error",
            confirmButtonText: "Cool",
          });
        })
        .then(function () {
          // always executed
        });
    },

    async deleteTask({ commit }, id) {
      await axios
        .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(function () {
          commit("removeTask", id);
          Swal.fire({
            position: "top",
            icon: "success",
            title: " task deleted",
            showConfirmButton: false,
            timerProgressBar: true,
            toast: true,
            timer: 3000,
          });
        })
        .catch(function (error) {
          Swal.fire({
            title: error,
            text: "Do you want to continue",
            icon: "error",
            confirmButtonText: "Cool",
          });
        })
        .then(function () {
          // always executed
        });
    },
  },
  modules: {},
};
export default task;
