<template>
  <div>
    <i
      @click="updateTask(task)"
      v-if="task.completed"
      class="bi bi-check-all"
      style="font-size: 25px"
    ></i>
    <i
      v-else
      @click="updateTask(task)"
      class="bi bi-check"
      style="font-size: 25px"
    ></i>
    <span
      v-if="loading"
      class="spinner-border spinner-border-sm"
      role="status"
    ></span>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useStore } from "vuex";
export default {
  props: ["task"],
  setup() {
    const loading = ref(false);
    const store = useStore();
    async function updateTask(task) {
      loading.value = true;
      await store.dispatch("task/updateTask", task);
      loading.value = false;
    }
    return { updateTask, loading };
  },
};
</script>

<style></style>
