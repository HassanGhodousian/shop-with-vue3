<template>
  <div class="continer">
    <div class="row">
      <div class="col-md-12 text-center mt-5">
        <h2>sarve naz</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          iusto repellat delectus repellendus, labore natus ullam nulla, fugiat
          sequi pariatur aliquam, ipsam dolores ipsum provident? Architecto
          laborum est maiores tempora!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const count = computed(() => store.state.count);
    return { count };
  },
};
</script>

<style></style>
