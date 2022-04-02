<template>
  <div>
    <i @click="deleteTask" class="bi bi-trash3-fill ms-3"></i>
    <span
      v-if="loading"
      class="spinner-border spinner-border-sm ms-2"
      role="status"
    ></span>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useStore } from "vuex";
export default {
  props: ["id"],
  setup(props) {
    const loading = ref(false);
    const store = useStore();

    async function deleteTask() {
      loading.value = true;
      await store.dispatch("task/deleteTask", props.id);
      loading.value = false;
    }
    return { deleteTask, loading };
  },
};
</script>

<style></style>
