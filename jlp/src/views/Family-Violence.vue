<template>
  <div class="family">
    <section class="hero is-medium">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            {{ title }}
          </h1>
          <h2 class="subtitle">
            {{ content }}
          </h2>
          <UnorderedList :list="list1"/>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import UnorderedList from '@/components/UnorderedList.vue'

export default {
  name: 'FamilyViolence',
  components: {
    UnorderedList
  },
  data() {
    return {
      title: `What is family violence?`,
      content: `“Family violence” is a term used to describe any violent, threatening, coercive or controlling behaviour 
      that occurs between people who share or have shared a family or intimate relationship.`,
      list1: [
        'direct or indirect threats',
        'sexual assault',
        'emotional and psychological torment',
        'economic control',
        'damage to property',
        'social isolation',
        'any behaviour which causes a person to live in fear'
      ],
    }
  }
}
</script>
