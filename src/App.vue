<template>

  <div
    id="app"
    class="container"
  >
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
      integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
      crossorigin="anonymous"
    >
    <MenuBar title="TestMenu" />
    <Hero
      title="Der EMI-Award - MeetUp der digitalen Generation"
      description="Hier treffen sich zukünftige Systemarchitekten, Spieleentwickler, Webdesigner, Medienpsychologen und UX-Experten."
    />
    <PostView />
  </div>
</template>

<script>
const MenuBar = () => import("./components/MenuBar/MenuBar");
const Hero = () => import("./components/Hero/Hero");
const PostView = () => import("./components/PostView/PostView");

export default {
  name: 'App',
  components: {
    MenuBar,
    Hero,
    PostView
  }
}
</script>
