<template>
  <div class="root">
    <section>
        <b-progress is-primary :value="0" size="is-medium" show-value>
            0 out of 4
        </b-progress>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'About',
  components: {
  },
  data() {
    return {
      yes: `Yes`,
      no: `No`,
      maybe: `Maybe`,
      q1: `Do you have close relationships with your friends or family?`,
      q2: `Does your partner ever discourage you from spending time with your friends or family?`,
      q3: `Does your partner act jealous or obsessive over you?`,
      q4: `Does your partner check your phone or social media to look at who you’ve been talking to?`,
      q5: `Does your partner experience mental health issues? E.g. depression, anxiety.`,
      q6: `If you answered yes to question 5, has your partner ever threatened to commit suicide or blamed you for their mental health problems?`,
      q7: `Have you recently been pregnant or given birth?`,
      q8: `Do you regularly use drugs or alcohol? E.g. more than three standard twice a week.`,
      q9: `Does your partner regularly use drugs or alcohol more than 3 times a week?`,
      q10: `Does your partner break or throw objects when they are angry?`,
      q11: `Has your partner ever threatened to physically harm you or someone close to you? This can include pets.`,
      q12: `Has your partner ever physically harmed you?`,
      q13: `Do you experience mental health issues? E.g. depression, anxiety.`,
      q14: `Does your partner want to know where you are all the time?`,
      q15: `Does your partner call or text you constantly, and get angry if you don’t respond?`,
      q16: `Has your partner ever pressured you to do something sexual that you did not want to do?`,
      q17: `Has your partner been violent on other occasions that did not involve you? For example, have they gotten into physical fights with other people?`,
    }
  }
}
</script>
