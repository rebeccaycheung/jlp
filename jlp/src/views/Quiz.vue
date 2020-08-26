<template>
  <div class="root">
    <section>
        <b-progress type="is-primary" :value="progress" size="is-medium" show-value>
            {{ index }} out of 3
        </b-progress>
    </section>
    <div v-for="(question) in currentQuestions" :key="question">
      <div class="question">
        <b>Question {{ questions.indexOf(question)+1 }})</b>
        <Question :question="question" />
      </div>
    </div>
    <div class="button-container">
      <b-button v-if="start > 6" type="is-light" v-on:click="prev()">Previous</b-button>
      <b-button v-if="start <= questions.length" type="is-primary" v-on:click="next()">Next</b-button>
      <b-button v-if="start > questions.length" type="is-primary">Finish</b-button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Question from '@/components/Question.vue'

export default {
  name: 'About',
  components: {
    Question
  },
  mounted() {
    this.currentQuestions = this.questions.slice(this.start, this.end)
    this.start = this.start + 6
    this.end = this.start + 6
  },
  methods: {
    next() {
      this.prevQuestions = this.currentQuestions
      this.currentQuestions = this.questions.slice(this.start, this.end)

      this.start = this.start + 6
      this.end = this.start + 6

      this.index += 1
      this.progress += 33.33
    },
    prev() {
      this.start = this.start - 6
      this.end = this.start + 6

      this.currentQuestions = this.prevQuestions
      this.prevQuestions = this.questions.slice(this.start-12, this.end-12)

      this.index -= 1
      this.progress -= 33.33
    }
  },
  data() {
    return {
      progress: 33.33,
      index: 1,
      start: 0,
      end: 6,
      currentQuestions: [],
      prevQuestions: [],
      questions: [
        `Do you have close relationships with your friends or family?`,
        `Does your partner ever discourage you from spending time with your friends or family?`,
        `Does your partner act jealous or obsessive over you?`,
        `Does your partner check your phone or social media to look at who you’ve been talking to?`,
        `Does your partner experience mental health issues? E.g. depression, anxiety.`,
        `If you answered yes to question 5, has your partner ever threatened to commit suicide or blamed you for their mental health problems?`,
        `Have you recently been pregnant or given birth?`,
        `Do you regularly use drugs or alcohol? E.g. more than three standard twice a week.`,
        `Does your partner regularly use drugs or alcohol more than 3 times a week?`,
        `Does your partner break or throw objects when they are angry?`,
        `Has your partner ever threatened to physically harm you or someone close to you? This can include pets.`,
        `Has your partner ever physically harmed you?`,
        `Do you experience mental health issues? E.g. depression, anxiety.`,
        `Does your partner want to know where you are all the time?`,
        `Does your partner call or text you constantly, and get angry if you don’t respond?`,
        `Has your partner ever pressured you to do something sexual that you did not want to do?`,
        `Has your partner been violent on other occasions that did not involve you? For example, have they gotten into physical fights with other people?`,
      ],
    }
  }
}
</script>

<style>
.question {
  margin-top: 50px;
  margin-bottom: 50px;
}

.button-container {
  display: flex;
  justify-content: space-between;
}
</style>
