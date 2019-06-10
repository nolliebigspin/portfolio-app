<template>
  <div>
    PostPage: {{ postId }}
  </div>
</template>

<script>
export default {
  name: "PostPage",
  props: {
    postId: {
      type: String
    }
  },
  data() {
    return {
      post: {}
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
