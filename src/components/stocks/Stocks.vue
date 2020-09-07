<template>
  <div class="mt-3 mb-3">
    <h1>Портфель</h1>
    <div class="row row-cols-2 row-cols-md-3">
      <Stock v-for="stock in stocks" :key="stock.id" :stock="stock" />
    </div>
  </div>
</template>

<script>
import Stock from "./Stock.vue";
export default {
  components: {
    Stock
  },
  computed: {
    stocks() {
      return this.$store.getters.stocks;
    }
  }
};
</script>
