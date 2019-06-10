<template>
  <div class="container">
    <section class="section">
      <h4 class="subtitle is-3">{{ motto }}</h4>
      <h5 class="subtitle is-6">Jahr: {{ date }}</h5>
      <!-- Load Posts here -->
      <div>
        <router-link
          v-for="post in posts"
          :key="post._id"
          :to="{name: 'post', params: {
            postId: post._id
          }}"
        >
          <!-- Fuck dashes... -->
          <Post
            :headline="post.headline"
            :teaser="post.teaser"
            :teaserImage="post['teaser-image']"
            :participants="post.participants"
            :tags="post.tags"
            :likes="post.likes"
            :commentCount="post.comments.length"
          />
        </router-link>
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
