<template>
  <div>
    <div class="row row-cols-2 row-cols-md-3 ">
      <Stock v-for="stock in stocks" :key="stock.id" :stock="stock" />
      
    </div>
  </div>
</template>

<script>
import Stock from "./Stock.vue";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      stocks: 'stockPortfolio'
    })
  },
  components: {
    Stock
  }
};
</script>
