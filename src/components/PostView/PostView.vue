<template>
  <div>
    <MottoGroup
      v-for="motto in mottos"
      :key="motto"
      :motto="motto"
      :posts="getMottoPosts(motto)"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { StoreTypes } from '@/store/types';

const MottoGroup = () => import('./MottoGroup/MottoGroup');

export default {
  name: "PostView",
  components: {
    MottoGroup
  },
  methods: {
    getMottoPosts(motto) {
      return this.posts.filter(post => post.motto == motto);
    },
  },
  computed: {
    ...mapGetters({
      posts: StoreTypes.posts.getters.POSTS
    }),
    mottos() {
      return [...new Set(this.posts.map(post => post.motto))];
    }
  },
  mounted() {
    this.$store.dispatch(StoreTypes.posts.actions.FETCH_ALL);
  }
}
</script>