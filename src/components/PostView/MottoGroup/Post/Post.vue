<template>
  <section class="card columns">
    <span class="card-image column">
      <figure class="image is-256x256">
        <img :src="teaserImage">
      </figure>
    </span>
    <span class="card-content column">
      <p class="is-size-7">{{ participants.join(", ") }}</p>
      <p class="subtitle is-2">{{ headline }}</p>
      <p class="is-size-6">{{ teaser }}</p>

      <span class="tags are-medium">
        <span
          v-for="tag in tags"
          :key="tag"
          class="tag is-rounded"
        >{{ tag }}</span>
      </span>

      <a
        class="icon is-medium has-badge-rounded"
        :data-badge="likes"
      >
        <i class="fas fa-heart fa-3x"></i>
      </a>

      <a
        class="icon is-medium has-badge-rounded"
        :data-badge="commentCount"
      ><i class="fas fa-comment fa-3x"></i>
      </a>
    </span>
  </section>
</template>

<script>
export default {
  name: "Post",
  props: {
    headline: {
      type: String,
      default: ""
    },
    teaser: {
      type: String,
      default: ""
    },
    teaserImage: {
      type: String,
      default: ""
    },
    participants: {
      type: Array,
      default() {
        return []
      }
    },
    tags: {
      type: Array,
      default() {
        return []
      }
    },
    likes: {
      type: Number,
      default: 0
    },
    commentCount: {
      type: Number,
      default: 0
    }
  }
}
</script>

