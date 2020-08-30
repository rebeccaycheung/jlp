<template>
  <div class="root">
    <h1 class="title">{{ $options.title }}</h1>
    <Paragraph :list="$options.content"/>
    <div class="social">
      <a href="">
        <font-awesome-icon :icon="['fab', 'twitter']" class="fa fa-2x" style="color: #00acee"/>
      </a>
      <a href="">
        <font-awesome-icon :icon="['fab', 'facebook']" class="fa fa-2x" style="color: #3b5998"/>
      </a>
      <a href="">
        <font-awesome-icon :icon="['fab', 'instagram']" class="fa fa-2x" style="color: #dd2a7b"/>
      </a>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Paragraph from '@/components/Paragraph.vue'

export default {
  name: 'About',
  components: {
    Paragraph,
  },
  title: `About us`,
  content: [
    `The Royal Commission into Family Violence in 2016 identified a need for preventative measures to
  prevent situations from reaching crisis point. With the help of industry professionals, we found a gap in services 
  and access to information for young adults. This website aims to help young adults identify the signs of family 
  violence in their own, and friends’, relationships. It offers holistic advice about the options available to them 
  at early stages of family violence.`,
    `This project started with the Just Leadership Program, an initiative of the Monash Law Students’ Society Social Justice and Equity portfolio.
  This program affords students an opportunity to learn from high profile speakers associated with social justice 
  in the law. As the Women’s Rights group, we were responsible for creating a project that would further gender equity.`,
  ],
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
