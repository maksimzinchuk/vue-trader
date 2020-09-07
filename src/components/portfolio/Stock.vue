<template>
  <div class="col-sm-6 col-md-6 col-lg-4 col-12 w-25 mt-3">
    <div class="card border-info mb-3 shadow">
      <div class="card-header">
        {{ stock.name }}
        <h6 class="card-subtitle mt-2 text-muted">
          (Цена: {{ stock.price }} | Количество: {{ stock.quantity }})
        </h6>
      </div>
      <div class="card-body">
        <div class="col">
          <input
            type="number"
            class="form-control sm-col-2"
            placeholder="Quantity"
            v-model="quantity"
          />
          <button
            href="#"
            class="btn btn-success mt-3 float-right"
            @click="sellStock"
            :disabled="lowQuantity || quantity <= 0 || Number.isInteger(quantity)"
            :class="{'btn-danger': lowQuantity}"
          >
            {{ lowQuantity ? 'Неверное количество' : 'Продать'}}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    lowQuantity() {
      return this.quantity > this.stock.quantity;
    }
  },
  methods: {
    ...mapActions({
      placeSellOrder: 'sellStock'
    }),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.placeSellOrder(order);
      this.quantity = 0;
    }
  }
};
</script>
