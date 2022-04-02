<template>
  <div>
    <headerView />
    <router-view></router-view>
  </div>
</template>

<script>
import headerView from "./components/headerView.vue";
export default {
  components: {
    headerView,
  },
};
</script>

<style></style>
