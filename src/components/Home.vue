<template>
  <div class="border mt-3 p-3">
    <h1>Добро пожаловать в Брокер</h1>
    <h6>Чтобы закрыть торговый день - нажмите "Закрыть день"</h6>
    <hr>
    <p>Баланс: {{ funds }} ₽</p>
  </div>
</template>

<script>
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  }
};
</script>
