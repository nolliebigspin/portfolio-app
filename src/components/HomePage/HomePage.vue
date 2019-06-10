<template>
  <div>
    <Hero
      title="Der EMI-Award - MeetUp der digitalen Generation"
      description="Hier treffen sich zukünftige Systemarchitekten, Spieleentwickler, Webdesigner, Medienpsychologen und UX-Experten."
    />
    <PostView />
  </div>
</template>

<script>
const Hero = () => import("./Hero/Hero");
const PostView = () => import("./PostView/PostView");

export default {
  name: 'HomePage',
  components: {
    Hero,
    PostView
  }
}
</script>
