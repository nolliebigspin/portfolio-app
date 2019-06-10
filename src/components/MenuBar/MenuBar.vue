<template>
  <nav
    class="navbar"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-menu">
      <div class="navbar-start">
        <router-link
          :to="{name: 'home'}"
          class="navbar-item"
        >EMI-Award</router-link>
      </div>

      <div class="navbar-end">
        <router-link
          :to="{name: 'home'}"
          class="navbar-item"
        >Home</router-link>
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

<style src="./MenuBar.css" scoped></style>
