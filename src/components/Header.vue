<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link to="/" class="navbar-brand">Брокер</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <router-link to="/portfolio" tag="li" active-class="active"
            ><a class="nav-link">Портфель</a></router-link
          >
          <router-link to="/stocks" tag="li" active-class="active"
            ><a class="nav-link">Что купить</a></router-link
          >
          <li class="nav-item">
            <a class="nav-link" href="#" @click="endDay">Закрыть день</a>
          </li>
        </ul>
        <strong class="navbar-text">
          Баланс: {{ funds }} ₽
        </strong>
      </div>
    </nav>
  </div>
</template>
<script>
import {mapActions} from 'vuex';
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  },
  methods: {
    ...mapActions([
      'randomizeStocks'
    ]),
    endDay() {
      this.randomizeStocks();
    }
  }
}
</script>