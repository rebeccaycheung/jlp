<template>
  <div class="support">
    <section class="hero is-medium">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            {{ title }}
          </h1>
          <Paragraph :list="content"/>
          <UnorderedList :list="list1"/>
          <Paragraph :list="content1"/>
          <UnorderedList :list="list2"/>
          <Paragraph :list="content2"/>
          <UnorderedList :list="list3"/>
          <Paragraph :list="content3"/>
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
      </div>
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
  data() {
    return {
      title: `What is family violence?`,
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
      ]
    }
  }
}
</script>
