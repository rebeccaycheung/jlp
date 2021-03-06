<template>
  <div class="root">
    <h1 class="title">How to support a friend?</h1>
    <section>
      <b-tabs class="block">
        <b-tab-item :label="$options.background.title">
          <img src="@/assets/conversation.png" style="float: right"/>
          <Paragraph :list="$options.background.content"/>
        </b-tab-item>
        <b-tab-item :label="$options.help.title">
          <UnorderedList :list="$options.help.content"/>
        </b-tab-item>
        <b-tab-item :label="$options.conversation.title">
          <UnorderedList :list="$options.conversation.content"/>
        </b-tab-item>
        <b-tab-item :label="$options.looking.title">
          <UnorderedList :list="$options.looking.content"/>
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
  name: 'Support',
  components: {
    UnorderedList,
    Paragraph
  },
  background: contentLabels.supportFriend.background,
  help: contentLabels.supportFriend.help,
  conversation: contentLabels.supportFriend.conversation,
  looking: contentLabels.supportFriend.looking,
}
</script>

<style scoped>
img {
  width: 200px;
  padding: 20px;
}
</style>
