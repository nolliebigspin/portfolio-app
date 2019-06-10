<template>
  <div>
    <p class="subtitle is-4">Füge ein Kommentar hinzu:</p>

    <div class="field control">
      <div class="field control">
        <input
          class="input"
          type="text"
          placeholder="Titel..."
        >
      </div>
      <textarea
        class="textarea"
        placeholder="Kommentar..."
      ></textarea>
    </div>
    <button class="button is-info is-pulled-right field control">Senden</button>
    <div
      class="field control"
      v-for="comment in comments"
      :key="comment.title"
    >
      <div class="box">
        <p class="title is-5">{{ comment.title }}</p>
        <p>{{ comment["body-text"] }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostPageComments',
  props: {
    comments: {
      type: Array,
      required: true,
      default() {
        return []
      }
    }
  }

}
</script>
