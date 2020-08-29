<template>
  <div class="root">
    <h1 class="title">How to support a friend?</h1>
    <section>
      <b-tabs class="block">
        <b-tab-item :label="$options.title1">
          <Paragraph :list="$options.content1"/>
        </b-tab-item>
        <b-tab-item :label="$options.title2">
          <Paragraph :list="$options.content2"/>
        </b-tab-item>
        <b-tab-item :label="$options.title3">
          <UnorderedList :list="$options.list1"/>
        </b-tab-item>
        <b-tab-item :label="$options.title4">
          <UnorderedList :list="$options.list2"/>
        </b-tab-item>
      </b-tabs>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import UnorderedList from '@/components/UnorderedList.vue'
import Paragraph from '@/components/Paragraph.vue'

export default {
  name: 'Support',
  components: {
    UnorderedList,
    Paragraph
  },
  title1: `Background Information`,
  content1: [
    `It can be really difficult for you to watch your friend go through an abusive, or even just bad relationship. 
    It can be hard to know what the right thing to do is, and how to make sure your friend gets the support they need, 
    without hurting yourself or your friendship.`,
    `Your friend might have a very different point of view from you- they might not think the relationship is abusive, 
    or might feel responsible for any abuse they’ve gone through. It might be difficult for your friend to even have a 
    conversation about their relationship.`,
    `Even if your friend realises the relationship is abusive, they might still choose to stay, or will get back together 
    with their partner lots of times.`,
    `This may be frustrating, but the decision to leave can only be made by the person experiencing the abuse, 
    and leaving the relationship may expose them to more danger.`,
    `If they stay, they will still need support from friends and family. If they leave, they may feel sad and 
    lonely and need support.`
  ],
  title2: `What can I do to help?`,
  content2: [
    `Don’t be afraid to reach out to a friend who you think needs help`,
    `Focus on your friend’s feelings and make them feel supported, rather than on their partner`,
    `Be supportive and listen patiently. Acknowledge their feelings and be respectful of their decisions`,
    `If they break up with the abusive partner, continue to be supportive after the relationship is over`,
    `Even when you feel like there’s nothing you can do, don’t forget that by being supportive and caring, 
    you’re already doing a lot`,
    `Don’t contact their abuser or publicly post negative things about them online. It’ll only worsen the 
    situation for your friend`
  ],
  title3: `If they don’t feel comfortable with the conversation:`,
  list1: [
    `Don’t push the conversation too hard`,
    `Maintain your friendship and connection`,
    `Look out for their emotional wellbeing`,
    `Make sure they don’t start blaming themselves for things`,
    `Affirm that they are a good and valuable person`,
    `Tell them that you’re concerned for their safety and want to help`,
    `Help your friend recognize that the abuse is not “normal” and is NOT their fault. Everyone deserves a healthy, non-violent relationship`,
    `Connect your friend to resources in their community that can give them information and guidance - SEE EMOTIONAL RESOURCES and LEGAL RESOURCES`
  ],
  title4: `Looking after yourself`,
  list2: [
    `While it’s important to be there for your friend, it’s also important to look after yourself. 
    It is easy to get sucked into very late nights and lots of emotional labour when you are supporting your friend`,
    `It is ok to set boundaries with your friend`,
    `You can say that it is time for you to go to bed, or recommend that they see a counsellor because 
    you cannot give them all the advice or support they need`,
    `You don’t have to be solely responsible for your friend’s wellbeing`,
    `If you feel like you aren’t coping with the pressure, it is a good idea to seek emotional resources yourself`
  ]
}
</script>
