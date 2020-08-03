<template>
  <div class="about">
    <Content :title="title" :content="content" />
  </div>
</template>

<script>
// @ is an alias to /src
import Content from '@/components/Content.vue'

export default {
  name: 'About',
  components: {
    Content,
  },
  data() {
    return {
      title: `About us`,
      content: `The Just Leadership Program is an initiative of the Monash LSS Social Justice & Equity portfolio.
      This program affords students an opportunity to learn from high profile speakers associated with social justice 
      in the law. As the Women’s Rights group, we were responsible for creating a project that would further gender equity.
      The Royal Commission into Family Violence in 2016 identified a need for preventative measures to
      prevent situations from reaching crisis point. With the help of industry professionals, we found a gap in services 
      and access to information for young adults. This website aims to help young adults identify the signs of family 
      violence in their own, and friends’, relationships. It offers holistic advice about the options available to them 
      at early stages of family violence. `,
    }
  }
}
</script>
