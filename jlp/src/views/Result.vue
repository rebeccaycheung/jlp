<template>
  <div class="root">
    <h1 class="title">{{ currentTitle }}</h1>
    <Paragraph :list="currentContent"/>
    <div v-for="link in currentLinks" :key="link">
      <router-link :to="link.link">{{ link.title }}</router-link>
    </div>
  </div>
</template>

<script>
import Paragraph from '@/components/Paragraph.vue'

export default {
  name: 'Result',
  components: {
    Paragraph
  },
  mounted() {
    if (this.$store.state.count <= 0) {
      this.currentTitle = this.positiveTitle
      this.currentContent = this.positiveContent
      this.currentLinks.push(this.support)
      this.currentLinks.push(this.family)
    }
  },
  data() {
    return {
      currentTitle: '',
      currentContent: [],
      currentLinks: [],
      family: {
        link: '/family-violence',
        title: 'Family violence'
      },
      support: {
        link: '/support',
        title: 'How to support a friend'
      },
      help: {
        link: '/help',
        title: 'Support services'
      },
      positiveTitle: `This quiz does not detect any signs of an unhealthy relationship`,
      positiveContent: [
          `It sounds like your relationship is on the right track! Healthy relationships don’t just happen. They
          take mutual time, effort and respect so keep up the good work!`,
          `However, while you may have a healthy relationship, a friend of yours may not. If you think that you
          may know someone who may be in an unhealthy relationship, check out the following pages to
          find out more about unhealthy relationships and how you can help that person end the abuse.`
      ],
      warningTitle: `This quiz detects a few signs of an unhealthy relationship`,
      warningContent: [
          `You might be noticing a couple of things in your relationship that are unhealthy, but it doesn’t
          necessarily mean they are warning signs. However, it’s still a good idea to keep an eye out and
          ensure that there isn’t an unhealthy pattern of behaviour developing.
          It may be useful to stay informed so that you can recognise the warning signs of an unhealthy
          relationship and the law surrounding family violence.`
      ],
      negativeTitle: `This quiz has detected some serious signs of an unhealthy relationship`,
      negativeContent: [
          `It sounds like you may be seeing some serious warning signs of an abusive relationship. While it
          may be true that no relationship is perfect, in a healthy relationship, you should not find abusive
          behaviours. Do not ignore these red flags. There is help available and you are not alone.`
      ],
      urgentTitle: `This quiz has detected very serious signs of an unhealthy relationship`,
      urgentContent: [
          `You are seeing some very serious warning signs and may be in an unhealthy relationship.
          However, you are not alone and there is help available.`
      ]
    }
  }
}
</script>
