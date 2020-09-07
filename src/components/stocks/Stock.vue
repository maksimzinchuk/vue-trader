<template>
  <div class="col-sm-6 col-md-6 col-lg-4 col-12 w-25">
    <div class="card border-info mb-3 shadow">
      <div class="card-header">
        {{ stock.name }}
        <h6 class="card-subtitle mt-2 text-muted">
          (Цена: {{ stock.price }})
        </h6>
      </div>
      <div class="card-body">
        <div class="col">
          <input
            type="number"
            class="form-control sm-col-2"
            placeholder="Количество"
            v-model.number="quantity"
          />
          <button
            href="#"
            class="btn btn-success mt-3 float-right"
            @click="buyStock"
            :disabled="lowFunds || quantity <= 0 || !Number.isInteger(quantity)"
            :class="{'btn-danger': lowFunds}"
          >
            {{ lowFunds ? 'Недостаточно средств' : 'Купить'}}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.$store.dispatch("buyStock", order);
      this.quantity = 0;
    }
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    lowFunds() {
      return this.quantity * this.stock.price > this.funds;
    }
  }
};
</script>
