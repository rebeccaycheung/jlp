<template>
  <div class="root">
    <h1 class="title">What is family violence?</h1>
    <section>
      <b-tabs class="block">
        <b-tab-item :label="$options.violence.title">
          <img src="@/assets/question.png" style="float: right"/>
          <Paragraph :list="$options.violence.content"/>
          <UnorderedList :list="$options.violence.list"/>
          <Paragraph :list="$options.violence.content1"/>
          <UnorderedList :list="$options.violence.list2"/>
          <Paragraph :list="$options.violence.content2"/>
          <UnorderedList :list="$options.violence.list3"/>
          <Paragraph :list="$options.violence.content3"/>
          <div class="links">
            <p>
              <a href="https://www.whiteribbon.org.au/">https://www.whiteribbon.org.au/</a>
            </p>
            <p>
              <a href="http://www.dvrcv.org.au/">http://www.dvrcv.org.au/</a>
            </p>
            <p>
              <a href="https://www.1800respect.org.au/help-and-support/">https://www.1800respect.org.au/help-and-support/</a>
            </p>
            <p>
              <a href="https://www.safesteps.org.au/understanding-family-violence/what-is-family-violence/">https://www.safesteps.org.au/understanding-family-violence/what-is-family-violence/</a>
            </p>
          </div>
        </b-tab-item>
        <b-tab-item :label="$options.say.title">
          <Paragraph :list="$options.say.content"/>
          <UnorderedList :list="$options.say.list"/>
          <Paragraph :list="$options.say.content1"/>
          <UnorderedList :list="$options.say.list1"/>
        </b-tab-item>
        <b-tab-item :label="$options.definitions.title">
          <Paragraph :list="$options.definitions.content"/>
        </b-tab-item>
      </b-tabs>
    </section>
  </div>
</template>

<script>
import UnorderedList from '@/components/UnorderedList.vue'
import Paragraph from '@/components/Paragraph.vue'
import { contentLabels } from '@/json/content-labels'

export default {
  name: 'FamilyViolence',
  components: {
    UnorderedList,
    Paragraph
  },
  violence: contentLabels.familyViolence.violence,
  say: contentLabels.familyViolence.say,
  definitions: contentLabels.familyViolence.definitions,
}
</script>

<style scoped>
.links {
  margin-bottom: 50px;
}

img {
  width: 200px;
  padding: 20px;
}
</style>
