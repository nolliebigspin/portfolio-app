<template>
  <div class="container">
    <section class="section">
      <h4 class="subtitle is-4">{{ motto }}</h4>
      <h5 class="subtitle is-5">{{ date }}</h5>
      <!-- Load Posts here -->
      <div>
        <!-- Fuck dashes... -->
        <Post
          v-for="post in posts"
          :key="post._id"
          :headline="post.headline"
          :teaser="post.teaser"
          :teaserImage="post['teaser-image']"
          :participants="post.participants"
          :tags="post.tags"
          :likes="post.likes"
          :commentCount="post.comments.length"
        />
      </div>
    </section>
  </div>
</template>

<script>
const Post = () => import('./Post/Post');

export default {
  name: "MottoGroup",
  props: {
    motto: {
      type: String,
      default: ""
    },
    posts: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    Post
  },
  computed: {
    date() {
      // Isn't this a beauty of horrifying javascript ES6 mashups?
      return new Date(this.posts.filter(post => post.motto === this.motto)[0].date).getYear() + 1900; // fuck javascript :)
    }
  }
}
</script>
