<template>
  <div class="container">
    <Header />
    <div class="row">
      <div class="col-md-12">
        <transition name="main" mode="out-in">
        <router-view></router-view>
        </transition>
        
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  components: {
    Header
  },
  created() {
    this.$store.dispatch("initStocks");
  }
};
</script>

<style>
body {
  padding-top: 30px;
}

.main-enter-active {
animation: slide-in 0.2s ease-out forwards;
}

.main-leave-active {
animation: slide-out 0.2s ease-out forwards;
}

@keyframes slide-in {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-30px);
    opacity: 0;
  }
}
</style>
