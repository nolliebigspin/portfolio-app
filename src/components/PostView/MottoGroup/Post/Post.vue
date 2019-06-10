<template>
  <section class="card column">
    <div class="columns">
      <span class="card-image column is-two-fifths">
        <figure class="image">
          <img :src="teaserImage">
        </figure>
      </span>
      <div class="card-content column">
        <p class="is-size-7">{{ participants.join(", ") }}</p>
        <p class="subtitle is-2">{{ headline }}</p>
        <p class="is-size-6">{{ teaser }}</p>

        <b-taglist class="taglist">
          <b-tag
            rounded
            v-for="tag in tags"
            :key="tag"
          >{{ tag }}
          </b-tag>
        </b-taglist>

        <div class="container columns">
          <div class="column is-2">
            <b-icon
              pack="fas"
              icon="heart"
              size="is-large"
              :data-badge="likes"
            />
          </div>

          <div class="column is-2">
            <b-icon
              pack="fas"
              icon="comment"
              size="is-large"
              :data-badge="commentCount"
            />
          </div>

          <div class="column"></div>
        </div>
      </div>
    </div>
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

<style src="./Post.css" scoped></style>
