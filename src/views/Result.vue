<template>
  <div class="root">
    <h1 class="title">{{ currentTitle }}</h1>
    <Paragraph :list="currentContent"/>
    <div v-for="(link, index) in currentLinks" :key="index" class="link">
      <span v-if="link.description">{{ link.description }} </span>
      <span>
        for more details, visit:
        <router-link :to="link.link"> {{ link.title }}</router-link>
      </span>
    </div>
    <b-message type="is-warning" class="disclaimer">
      <div class="disclaimer-message">
        <font-awesome-icon icon="exclamation-triangle" class="icon"/>
        <div class="content">
          <p><b>Disclaimer</b></p>
          {{ $options.disclaimer }}
        </div>
      </div>
    </b-message>
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
    if (this.$store.state.total >= 0 && this.$store.state.total <= 10) {
      this.currentTitle = this.$options.positiveTitle
      this.currentContent = this.$options.positiveContent
      this.currentLinks.push(this.$options.support)
      this.currentLinks.push(this.$options.family)
    }
    else if (this.$store.state.total >= 11 && this.$store.state.total <= 50) {
      this.currentTitle = this.$options.negativeTitle
      this.currentContent = this.$options.negativeContent
      this.currentLinks.push(this.$options.family)
      this.currentLinks.push(this.$options.help)
    }
    else if (this.$store.state.total >= 51) {
      this.currentTitle = this.$options.urgentTitle
      this.currentContent = this.$options.urgentContent
      this.currentLinks.push(this.$options.help)
    }
  },
  data() {
    return {
      currentTitle: '',
      currentContent: [],
      currentLinks: [],
    }
  },
  family: {
    link: '/family-violence',
    title: 'Family violence',
    description: 'Find out more about family violence - '
  },
  support: {
    link: '/support',
    title: 'Supporting a friend',
    description: 'Find out more about how to support a friend - '
  },
  help: {
    link: '/help',
    title: 'Getting help',
    description: 'If you or someone else is in danger, do not wait; please call the police for help on 000 immediately - ',
  },
  disclaimer: 'This quiz is for educational purposes only and may not be conclusive in respect to your personal circumstances.',
  positiveTitle: `This quiz does not detect any signs of an unhealthy relationship`,
  positiveContent: [
      `It sounds like your relationship is on the right track! Healthy relationships don’t just happen. They
      take mutual time, effort and respect so keep up the good work!`,
      `However, while you may have a healthy relationship, a friend of yours may not. If you think that you
      may know someone who may be in an unhealthy relationship, check out the following pages to
      find out more about unhealthy relationships and how you can help that person end the abuse.`
  ],
  negativeTitle: `This quiz has detected some serious signs of an unhealthy relationship`,
  negativeContent: [
      `It seems like there are some warning signs of an abusive relationship. While it may be true that no relationship is perfect, in a healthy relationship, you should not find abusive behaviours. Do not ignore these red flags, and feel free to repeat the test if circumstances have changed – help is always available, and you are not alone.`
  ],
  urgentTitle: `This quiz has detected very serious signs of an unhealthy relationship`,
  urgentContent: [
      `There are very serious warning signs you may be in an unhealthy relationship.
      However, you are not alone and there is help available.`
  ]
}
</script>

<style scoped>
.disclaimer {
  margin-top: 50px;
}

.disclaimer-message {
  display: flex;
  justify-content: start;
  align-content: center;
}

.icon {
  margin-right: 10px;
}

.link {
  margin-top: 20px;
}
</style>
