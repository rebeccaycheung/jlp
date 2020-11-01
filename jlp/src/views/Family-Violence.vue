<template>
  <div class="root">
    <h1 class="title">What is family violence?</h1>
    <section>
      <b-tabs class="block">
        <b-tab-item :label="$options.title">
          <img src="@/assets/question.png" style="float: right"/>
          <Paragraph :list="$options.content"/>
          <UnorderedList :list="$options.list1"/>
          <Paragraph :list="$options.content1"/>
          <UnorderedList :list="$options.list2"/>
          <Paragraph :list="$options.content2"/>
          <UnorderedList :list="$options.list3"/>
          <Paragraph :list="$options.content3"/>
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
        <b-tab-item :label="$options.title1">
          <Paragraph :list="$options.content4"/>
          <UnorderedList :list="$options.list4"/>
          <Paragraph :list="$options.content5"/>
          <UnorderedList :list="$options.list5"/>
        </b-tab-item>
        <b-tab-item :label="$options.title2">
          <Paragraph :list="$options.content6"/>
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
  name: 'FamilyViolence',
  components: {
    UnorderedList,
    Paragraph
  },
  title: `What is family violence?`,
  title1: `What does the law say?`,
  title2: `Definitions`,
  content: [
    `“Family violence” is a term used to describe any violent, threatening, coercive or controlling behaviour 
    that occurs between people who share or have shared a family or intimate relationship.`,
    `Family violence is not limited to physical violence but includes:`
    ],
  list1: [
    'direct or indirect threats',
    'sexual assault',
    'emotional and psychological torment',
    'economic control',
    'damage to property',
    'social isolation',
    'any behaviour which causes a person to live in fear'
  ],
  content1: [
    `A person can still suffer from family violence even if the relationship between the perpetrator and the 
    victim no longer exists.`,
    `Family violence can occur in a range of scenarios, such as between elderly adults and their children, or 
    between siblings. Most commonly however, family violence is perpetrated by current or previous male partners 
    against female partners.`,
    `Family violence has very serious impacts on both individual sufferers and on society:`
  ],
  list2: [
    'It is the leading contributor to preventable death, disability and illness in Victorian women aged 15 to 44',
    'It results in at least one woman being admitted to hospital every three hours',
    'One in five women had experienced violence from a current or previous partner since the age of 15',
    'In 2015 intimate partner violence contributed 41% of homicide & violence burden, 19% each of suicide & self-inflicted injuries and depressive disorders burden and 18% of early pregnancy loss burden'
  ],
  content2: [
    `The psychological and social effects of family violence can include:`
  ],
  list3: [
    'Feelings of self-blame and shame',
    'Loss of self-esteem',
    'Isolation from others',
    'Depression',
    'Anxiety',
    'Loss of employment opportunities'
  ],
  content3: [
    `The use of violence against a family member or intimate partner is a choice: an abuser chooses to use coercive or 
    violent behaviour to have power and control over somebody else, even if they try to make excuses for themselves and 
    their behaviour.`,
    `While the use of family violence is a choice, there are broader factors in our society that enable family violence 
    to exist. Gender inequity - the unequal treatment of men and women - racism, classism and a range of other factors 
    all contribute to the problem.`,
    `Only by raising awareness of family violence, and holding perpetrators accountable, can we hope to eradicate this 
    social problem.`,
    `For more information about family violence and what is being done to prevent it visit:`
  ],
  content4: [
    `Under the Victorian government Family Violence Protection Act 2008, family violence is defined as:
    (a) behaviour by a person towards a family member of that person if that behaviour`
  ],
  list4: [
    'Is physically or sexually abusive or',
    'Is emotionally or psychologically abusive or',
    'Is economically abusive or',
    'Is threatening or',
    'Is coercive or',
    `In any other way controls or dominates the family member and causes that family member to feel fear for the safety 
    or wellbeing of that family member or another person`
  ],
  content5: [
    `Or (b) behaviour by a person that causes a child to hear or witness, or otherwise be exposed to the effects of, 
    behaviour referred to in paragraph (a).`,
    `The Victorian government recognises that:`
  ],
  list5: [
    'Family violence violates human rights',
    'Family violence is not acceptable in any community or culture',
    'Family violence can seriously affect the emotional, physical and psychological wellbeing of children'
  ],
  content6: [
    `Intimate partner abuse: violent behaviour used by a current or former spouse or partner against the 
    other spouse or partner.`,
    `Dating abuse: violent behaviour used by a casual partner against the other partner.`,
    `Child abuse: violent behaviour or mistreatment towards a child or young person by a parent or caregiver. 
    Under Victorian law, exposing a child to any form of family violence is also a reportable child abuse offence – 
    so if a person is abusive towards their spouse in front of their child or children, child abuse has occurred.`,
    `Elder abuse: violent behaviour or mistreatment towards an older person by a partner or family member, often including financial abuse, 
    controlling behaviours and/or negligence.`,
    `Parental abuse: violent behaviour towards a parent by an adolescent child or dependant.`
  ]
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
