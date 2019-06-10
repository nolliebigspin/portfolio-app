<template>
  <div class="allPic">
    <img
      class="mainPic"
      :src="currentImage"
    >

    <div>
      <img
        class="smallPic"
        v-for="image in images"
        :key="image"
        @click="displayImage(image)"
        :src="image"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostPagePictures',
  props: {
    images: {
      type: Array,
      required: true,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentImage: this.images[0]
    }
  },
  methods: {
    displayImage(image) {
      this.currentImage = image;
    }
  }
}
</script>

<style scoped>
.mainPic {
  width: 99%;
}

.smallPic {
  width: 32.6%;
  margin-right: 5px;
}
</style>

