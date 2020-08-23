<template>
  <div class="root">
    <h1 class="title">{{ t1 }}</h1>
    <Paragraph :list="p1"/>
    <h1 class="title">{{ t2 }}</h1>
    <Paragraph :list="p2"/>
    <UnorderedList :list="l1"/>
    <Paragraph :list="p3"/>
    <UnorderedList :list="l2"/>
    <h1 class="title">{{ t3 }}</h1>
    <Paragraph :list="p4"/>
    <h1 class="title">{{ t4 }}</h1>
    <Paragraph :list="p5"/>
    <h1 class="title">{{ t5 }}</h1>
    <Paragraph :list="p6"/>
    <UnorderedList :list="l3"/>
    <Paragraph :list="p7"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Paragraph from '@/components/Paragraph.vue'
import UnorderedList from '@/components/UnorderedList.vue'

export default {
  name: 'Help',
  components: {
    Paragraph,
    UnorderedList,
  },
  data() {
    return {
      t1: `Ringing the police`,
      p1: [`If you or someone else is in danger, do not wait: call the police for help on 000. Their job is to ensure 
      your safety and to investigate if a crime has been committed. Even if it is not a crime, the police and other 
      services can help protect you.`,
      `You can contact the police at any time to report abuse that has happened to you, even if it happened months or years ago. 
      If you want the police to charge the person with a crime, you will need to make a ‘statement’ that describes what happened. 
      The police will type what you told them, investigate it and decide whether there is enough evidence to charge the person 
      with a criminal offence.`],
      t2: `Who can help?`,
      p2: [`A number of specialist support services exist which can provide services such as:`],
      l1: [
        'Working with Police and Court Support - link to EDVOS and other agencies',
        'Housing assistance',
        'Family violence and pregnancy',
        'Counselling and support groups - Call Safe Steps on 1800 015 188',
        'Family violence and animal abuse',
        'Men’s intake and referrals'
      ],
      p3: [`To protect those suffering from family violence, there are a number of specialist government services available including:`],
      l2: [
        `Safe steps Family Violence Response Centre which provides confidential support and information for women and children living with 
        family violence. https://www.safesteps.org.au/`,
        `Men’s Referral Service which is an anonymous and confidential telephone service for men. https://www.ntv.org.au/`,
        `The Orange Door - which is a collection of hubs which is a free service for adults, children and young people who are experiencing or have 
        experienced family violence. https://orangedoor.vic.gov.au/`
      ],
      t3: `Counselling and support`,
      p4: [
        `1800RESPECT (1800 737 732)
        A 24 hour national sexual assault, family and domestic violence counselling line for any Australian who has experienced, or is at risk of, family and 
        domestic violence and/or sexual assault.`,
        `LIFELINE (13 11 14)
        A national number that can help put you in contact with a crisis service in your state, available to anyone experiencing a personal crisis or 
        thinking about suicide.`,
        `RELATIONSHIPS AUSTRALIA (1300 364 277)
        Provides support groups and counselling on relationships, and for abusive and abused partners.`,
        `ABORIGINAL FAMILY DOMESTIC VIOLENCE HOTLINE (1800 019 123)
        Provides support for Aboriginal victims of crime who would like information on their rights, how to access counselling and financial assistance.`,
        `TRANSLATING & INTERPRETING SERVICE (131 450)
        Provides free access to a telephone or on-site interpreter in your own language, available 24 hours, every day of the year.`
      ],
      t4: `Legal support`,
      p5: [
        `While it is normal to feel nervous about seeking support, these services will help you understand if you feel nervous and can help you feel comfortable talking to them.`,
        `Remember: you have a right to get support and help. The abuse is not your fault.`,
        `Victorian Legal Aid`,
        `Phone 1300 792 387, Monday to Friday from 8am to 6pm.`,
        `You can call Victorian Legal Aid for free information about family violence intervention orders and how they can help you. 
        If they can’t help you directly, they will refer you to other organisations that can.`,
        `Your local community legal service may be able to give you legal information and advice, and potentially also advice and 
        representation at court. Most services are free.`,
        `The Women’s Legal Service Victoria provides free confidential legal information, advice representation and referral to women.`,
        `Djirra helps Aboriginal and Torres Strait Islander victims of family violence and sexual assault and works with families and communities 
        affected by violence.`,
        `You can also find a private lawyer near you through the Law Institute of Victoria’s Legal Referral Service. All law firms included in the 
        Legal Referral Service provide a free 30-minute interview. If you book an interview, write your questions down beforehand, so you get as much 
        out of the free 30 minutes as possible. If you discuss getting further help from the lawyer, make sure you know how much it will cost.`
      ],
      t5: `Intervention order`,
      p6: [
        `An intervention order is intended to protect you from experiencing violence from another person. It includes conditions that can prevent a person from:`
      ],
      l3: [
        `Committing family violence against you (including emotional, financial, physical, psychological or sexual abuse)`,
        `Damaging or threatening to damage your property`,
        `Contacting you (including by text or email)`,
        `Coming within 200m of your school, home or work, or come within 5m of you`,
        `Get anyone else to do any of those things`
      ],
      p7: [
        `You can apply for an intervention order to protect you here:`,
        `https://www.mcv.vic.gov.au/form-finder/application-family-violence-intervention-order-fvio1.`,
        `It is always a good idea to get legal advice before applying.`,
        `If an intervention order is broken, the police can arrest them and charge them with a criminal offence. 
        This could result in a criminal record and penalties such as jail time or fines. These orders are enforceable 
        anywhere in Australia. In an emergency, please call 000.`,
        `Reporting a breach of an IVO`,
        `Keep a diary of every breach, writing down dates, times and exactly what happened and what was said. Further, 
        no breach of an IVO condition is too small for police to act on a report that the IVO conditions have been broken. 
        When you report a breach, the police will take a signed statement, interview the respondent and any witnesses before
        deciding whether to make any charges.`
      ]
    }
  }
}
</script>
