<template>
  <section class="section">
    <div class="container">
      <h1 class="title">The counter: <span>{{ count }}</span></h1>
      <h2 class="subtitle">
        <button @click="changeBy(5)">++</button>
        <button @click="changeBy(1)">+</button>
        <button @click="setTo(0)">0</button>
        <button @click="changeBy(-1)">-</button>
        <button @click="changeBy(-5)">--</button>
      </h2>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import { StoreTypes } from '@/store/types'

export default {
  methods: {
    changeBy(amount) {
      this.$store.commit({
        type: StoreTypes.counter.mutations.CHANGE_BY,
        amount
      });
    },
    setTo(value) {
      this.$store.commit({
        type: StoreTypes.counter.mutations.SET_TO,
        value
      })
    }
  },
  computed: {
    ...mapGetters({
      count: StoreTypes.counter.getters.COUNT
    })
  }
}
</script>