<template>
  <div class="root">
    <h1 class="title">{{ $options.title }}</h1>
    <Paragraph :list="$options.content"/>
    <div class="social">
      <a href="https://twitter.com/empoweringrela1">
        <font-awesome-icon :icon="['fab', 'twitter']" class="fa fa-2x" style="color: #00acee"/>
      </a>
      <a href="https://www.facebook.com/Empowering-Relationships-111682207330212/">
        <font-awesome-icon :icon="['fab', 'facebook']" class="fa fa-2x" style="color: #3b5998"/>
      </a>
      <a href="https://www.instagram.com/empoweringrelationships/">
        <font-awesome-icon :icon="['fab', 'instagram']" class="fa fa-2x" style="color: #dd2a7b"/>
      </a>
    </div>
  </div>
</template>

<script>
import Paragraph from '@/components/Paragraph.vue'
import { contentLabels } from '@/json/content-labels'

export default {
  name: 'About',
  components: {
    Paragraph,
  },
  title: contentLabels.about.title,
  content: contentLabels.about.content,
}
</script>

<style scoped>
.social {
  text-align: center;
  margin-top: 30px;
}

.social a {
  padding: 10px;
}
</style>
