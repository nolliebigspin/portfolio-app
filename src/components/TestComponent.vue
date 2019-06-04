<template>
  <section class="section">
    <div class="container">
      <h1 class="title">The counter: <span>{{ count }}</span></h1>
      <h2 class="subtitle">
        <button @click="changeBy(5)">++</button>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="changeBy(-5)">--</button>
      </h2>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    increment() {
      this.$store.commit('counter/increment');
    },
    decrement() {
      this.$store.commit('counter/decrement');
    },
    changeBy(amount) {
      this.$store.commit({
        type: 'counter/changeBy',
        amount
      });
    }
  },
  computed: {
    count() {
      return this.$store.getters['counter/count'];
    }
  }
}
</script>