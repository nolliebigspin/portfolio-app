<template>
  <div class="container">
    <section class="section">
      <p class="is-size-2">{{ post.headline }}</p>
      <div class="columns">
        <div class="column is-three-quarters">
          <p class="is-size-7">{{ participants }}</p>
          <p class="is-size-5">{{ post.text }}</p>
        </div>
        <div class="column">
          <p class="subtitle is-2">Likes</p>
          <hr>
          <div class="columns">
            <i class=" column is-half fas fa-heart">x{{ post.likes }}</i>
            <button class="button is-info">+1</button>
          </div>
          <p class="subtitle is-2">Tags</p>
          <hr>

          <b-taglist class="taglist">
            <b-tag
              rounded
              v-for="tag in post.tags"
              :key="tag"
            >{{ tag }}
            </b-tag>
          </b-taglist>

        </div>
      </div>
    </section>
    <section class="section">
      <PostPagePictures :images="post.images" />
    </section>
    <section class="section">
      <PostPageComments :comments="post.comments" />
    </section>
  </div>
</template>

<script>
const PostPagePictures = () => import("./PostPagePictures/PostPagePictures");
const PostPageComments = () => import("./PostPageComments/PostPageComments");


export default {
  name: "PostPage",
  props: {
    postId: {
      type: String
    }
  },
  components: {
    PostPagePictures,
    PostPageComments
  },
  data() {
    return {
      post: {}
    }
  },
  computed: {
    participants() {
      return this.post.participants.join(", ");
    }
  },
  mounted() {
    this.getPost();
  },
  methods: {
    getPost() {
      fetch(`/api/posts/${this.postId}`)
        .then((response) => {
          response.json().then(data => {
            this.post = data;
          })
        })
        .catch((error) => {
          alert("Failed to fetch data: " + error);
        });
    }
  }
}
</script>

<style scoped>
.fa-heart {
  color: red;
}
.taglist {
  margin-top: 2vh;
}
</style>
