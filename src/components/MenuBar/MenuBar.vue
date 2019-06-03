<template>
  <nav
    class="navbar"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item">EMI-Award</a>
      </div>

      <div class="navbar-end">
        <a class="navbar-item">Home</a>
        <a class="navbar-item">About</a>
        <a class="navbar-item">Portfolio</a>
        <a class="navbar-item">Contact</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "MenuBar",
  props: {
    title: {
      type: String,
      default() {
        return "MenuBarTitle"
      }
    }
  }
}
</script>

<style scoped>
a.navbar-item {
  text-transform: uppercase;
}
</style>
