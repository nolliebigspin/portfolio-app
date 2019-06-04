<template>
  <div
    id="app"
    class="container"
  >
    <MenuBar title="TestMenu" />
    <Hero
      title="Der EMI-Award - MeetUp der digitalen Generation"
      description="Hier treffen sich zukünftige Systemarchitekten, Spieleentwickler, Webdesigner, Medienpsychologen und UX-Experten."
    />
    <TestComponent />
  </div>
</template>

<script>
const MenuBar = () => import("./components/MenuBar/MenuBar");
const Hero = () => import("./components/Hero/Hero");

const TestComponent = () => import("./components/TestComponent");

export default {
  name: 'App',
  components: {
    MenuBar,
    Hero,
    TestComponent
  }
}
</script>

<style scoped>
</style>
