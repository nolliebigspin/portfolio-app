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
    <Teaser
      motto="Beyond Surface"
      date="2019"
    />
  </div>
</template>

<script>
const MenuBar = () => import("./components/MenuBar/MenuBar");
const Hero = () => import("./components/Hero/Hero");
const Teaser = () => import("./components/Teaser/Teaser");

export default {
  name: 'App',
  components: {
    MenuBar,
    Hero,
    Teaser
  }
}
</script>

<style scoped>
.container {
  background: #eeeeee;
}
</style>
