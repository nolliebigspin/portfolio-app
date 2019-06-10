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
    <router-view />
  </div>
</template>

<script>
const MenuBar = () => import("./components/MenuBar/MenuBar");

export default {
  name: 'App',
  components: {
    MenuBar
  }
}
</script>
