<template>
  <div>
    <div v-if="loading" class="container">
      <div class="row justify-content-center">
        <div class="spinner-border" role="status">
          <span class="sr-only"></span>
        </div>
      </div>
    </div>
    <div v-else class="container mt-3">
      <creatTask />
      <hr />
      <filterTasks />

      <div class="row g-3">
        <div v-for="task in tasks" :key="task.id" class="col-md-4">
          <div class="card" :class="{ 'bg-light': task.completed }">
            <div
              class="card-body d-flex justify-content-between align-items-center"
            >
              <div v-if="task.completed">
                <del>{{ task.title }}</del>
              </div>
              <div v-else>{{ task.title }}</div>
              <div class="d-flex align-items-center">
                <updateTask :task="task" />
                <deleteTask :id="task.id" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "@vue/runtime-core";
import { useStore } from "vuex";
import filterTasks from "@/components/tasks/filterTasks.vue";
import creatTask from "@/components/tasks/creatTask.vue";
import updateTask from "@/components/tasks/updateTask.vue";
import deleteTask from "@/components/tasks/deleteTask.vue";

export default {
  components: {
    filterTasks,
    creatTask,
    updateTask,
    deleteTask,
  },
  setup() {
    const store = useStore();
    const loading = ref(false);
    const tasks = computed(() => {
      return store.getters["task/allTasks"];
    });
    async function fetchTasks() {
      loading.value = true;
      await store.dispatch("task/fetchTasks");
      loading.value = false;
    }

    fetchTasks();
    return { tasks, loading };
  },
};
</script>

<style></style>
