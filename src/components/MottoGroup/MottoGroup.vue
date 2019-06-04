<template>
  <div class="container">
    <section class="section">
      <h4 class="subtitle is-4">{{ motto }}</h4>
      <h5 class="subtitle is-5">{{ date }}</h5>
      <section class="card columns">
        <span class="card-image column">
          <figure class="image is-256x256">
            <img src="@/assets/Teaser-VirtualWear.jpg">
          </figure>
        </span>
        <span class="card-content column">
          <p class="is-size-7">Rainmund Canzler, Finn Karsten, Anna-Tabea Manske</p>
          <p class="subtitle is-2">VirtualWear</p>
          <p class="is-size-6">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
          <br>
          <span class="tags are-medium">
            <span class="tag">Fashion</span>
            <span class="tag">Virtual Reality</span>
            <span class="tag">T-Shirt</span>
          </span>
          <br>
          <a
            class="icon is-medium has-badge-rounded"
            data-badge="9"
          >
            <i class="fas fa-heart fa-3x"></i>
          </a>

          <a
            class="icon is-medium has-badge-rounded"
            data-badge="8"
          ><i class="fas fa-comment fa-3x"></i>
          </a>
        </span>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  name: "MottoGroup",
  props: {
    motto: {
      type: String,
      default: ""
    },
    date: {
      type: String,
      default: ""
    }
  },
  components: {

  },
  data() {
    return {}
  }
}
</script>

<style scoped>
@import "./MottoGroup.css";
</style>
