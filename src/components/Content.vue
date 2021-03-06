<template>
  <div>
    <section class="hero is-medium">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            {{ title }}
          </h1>
          <h2 class="subtitle">
            {{ content }}
          </h2>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Content',
  props: {
    title: String,
    content: String,
  },
});
</script>
