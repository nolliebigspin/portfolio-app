<template>
  <section class="hero is-medium is-info is-bold">
    <div class="hero-body">
      <div class="container">
        <h1 class="title has-text-centered">
          {{ title }}
        </h1>
        <h2 class="subtitle has-text-centered">
          {{ description }}
        </h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Hero",
  props: {
    title: {
      type: String,
      default() {
        return "HeroTitle";
      }
    },
    description: {
      type: String,
      default() {
        return "This is a Hero description text.";
      }
    }
  },
  components: {

  },
  data() {
    return {}
  }
}
</script>
