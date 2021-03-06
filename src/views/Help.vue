<template>
  <div class="root">
    <h1 class="title">Where can I get help?</h1>
    <section>
      <b-tabs class="block">
        <b-tab-item :label="$options.ring.title">
            <img src="@/assets/iphone.png" style="float: right"/>
            <Paragraph :list="$options.ring.content"/>
        </b-tab-item>
        <b-tab-item :label="$options.help.title">
          <img src="@/assets/customer_service.png" style="float: right"/>
          <Paragraph :list="$options.help.specialist.content"/>
          <UnorderedList :list="$options.help.specialist.list"/>
          <Paragraph :list="$options.help.protect.content"/>
          <UnorderedList :list="$options.help.protect.list"/>
        </b-tab-item>
        <b-tab-item :label="$options.counselling.title">
          <img src="@/assets/health.png" style="float: right"/>
          <Paragraph :list="$options.counselling.content"/>
        </b-tab-item>
        <b-tab-item :label="$options.legal.title">
          <img src="@/assets/lawyer.png" style="float: right"/>
          <Paragraph :list="$options.legal.content"/>
        </b-tab-item>
        <b-tab-item :label="$options.order.title">
          <Paragraph :list="$options.order.listTitle"/>
          <UnorderedList :list="$options.order.list"/>
          <Paragraph :list="$options.order.content"/>
        </b-tab-item>
      </b-tabs>
    </section>
  </div>
</template>

<script>
import Paragraph from '@/components/Paragraph.vue'
import UnorderedList from '@/components/UnorderedList.vue'
import { contentLabels } from '@/json/content-labels'

export default {
  name: 'Help',
  components: {
    Paragraph,
    UnorderedList,
  },
  ring: contentLabels.gettingHelp.ring,
  help: contentLabels.gettingHelp.help,
  counselling: contentLabels.gettingHelp.counselling,
  legal: contentLabels.gettingHelp.legal,
  order: contentLabels.gettingHelp.order,
}
</script>

<style scoped>
img {
  width: 200px;
  padding: 20px;
}
</style>
