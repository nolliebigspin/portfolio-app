<template>
  <div>
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
    <section class="hero">
      <div class="hero-body has-text-centered">
        <div class="container">
          <h1 class="title">
            Die Preisträger:
          </h1>
        </div>
      </div>
    </section>
  </div>
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
  }
}
</script>
