<template>
  <div class="row">
    <h4>creat task :</h4>
    <form @submit.prevent="storeTask" class="row col-md-12">
      <div class="col-md-6">
        <input v-model="title" type="text" class="form-control" />
        <div class="form-text text-danger">{{ titleError }}</div>
      </div>
      <div class="col-auto">
        <button class="btn btn-dark">
          Creat
          <span
            v-if="loading"
            class="spinner-border spinner-border-sm"
            role="status"
          ></span>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const title = ref("");
    const titleError = ref("");
    const loading = ref(false);

    async function storeTask() {
      if (title.value == "") {
        titleError.value = "text required";
      } else {
        loading.value = true;
        titleError.value = "";
        await store.dispatch("task/storeTask", title.value);
        loading.value = false;
      }
    }
    return { storeTask, title, titleError, loading };
  },
};
</script>

<style></style>
