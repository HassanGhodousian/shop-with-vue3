<template>
  <div>
    <div class="container mt-3">
      <div class="row g-3">
        <div v-for="product in products" :key="product.id" class="col-md-3">
          <div class="card" style="width: 18rem">
            <img
              class="card-img-top"
              :src="product.image"
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">{{ product.name }}</h5>
              <p class="card-text">{{ product.description }}</p>
              <div
                class="card-footer d-flex justify-content-between align-items-center"
              >
                <button
                  @click="addToCard(product)"
                  class="btn btn-sm btn-outline-success"
                >
                  add to cart
                </button>
                <span>
                  {{ product.price }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";

export default {
  components: {},
  setup() {
    const store = useStore();
    function addToCard(product) {
      store.dispatch("cart/addToCart", product);
    }
    const products = computed(() => {
      return store.getters["products/allproducts"];
    });
    return { products, addToCard };
  },
};
</script>

<style></style>
