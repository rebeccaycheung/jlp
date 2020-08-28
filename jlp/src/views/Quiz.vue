<template>
  <div class="root">
    <section>
        <b-progress type="is-primary" :value="progress" size="is-medium" show-value>
            {{ index }} out of 3
        </b-progress>
    </section>
    <div v-for="(question) in currentQuestions" :key="question.index">
      <div class="question">
        <b>Question {{ question.index }}</b>
        <Question
          :question="question.question"
          :index="question.index"
          :yes="question.points.yes"
          :no="question.points.no"
          :maybe="question.points.maybe"
        />
      </div>
    </div>
    <div class="button-container">
      <b-button v-if="start > 6" type="is-light" v-on:click="prev()" class="leftButton">Previous</b-button>
      <b-button v-if="start <= questions.length" type="is-primary" v-on:click="next()" class="leftButton">Next</b-button>
      <b-button v-if="start > questions.length" type="is-primary" v-on:click="finish()">Finish</b-button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Question from '@/components/Question.vue'

export default {
  name: 'Quiz',
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
    },
    finish() {
      let total = 0
      const questions = this.$store.state.questions
      for (const i in questions) {
        total = total + questions[i]
      }
      this.$store.commit('setTotal', total)
      this.$router.push({ path: 'result' })
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
        {
          index: 1,
          question: `Do you have close relationships with your friends or family?`,
          points: {
            yes: 0,
            no: 1,
            maybe: 0,
          }
        },
        {
          index: 2,
          question: `Does your partner ever discourage you from spending time with your friends or family?`,
          points: {
            yes: 1,
            no: 0,
            maybe: 0,
          }
        },
        {
          index: 3,
          question: `Does your partner act jealous or obsessive over you?`,
          points: {
            yes: 5,
            no: 0,
            maybe: 0,
          }
        },
        {
          index: 4,
          question: `Does your partner check your phone or social media to look at who you’ve been talking to?`,
          points: {
            yes: 5,
            no: 0,
            maybe: 0,
          }
        },
        {
          index: 5,
          question: `Does your partner experience mental health issues? E.g. depression, anxiety.`,
          points: {
            yes: 1,
            no: 0,
            maybe: 0,
          }
        },
        {
          index: 6,
          question: `If you answered yes to question 5, has your partner ever threatened to commit suicide or blamed you for their mental health problems?`,
          points: {
            yes: 10,
            no: 0,
            maybe: 0,
          }
        },
        {
          index: 7,
          question: `Have you recently been pregnant or given birth?`,
          points: {
            yes: 5,
            no: 0,
            maybe: 0,
          }
        },
        {
          index: 8,
          question: `Do you regularly use drugs or alcohol? E.g. more than three standard twice a week.`,
          points: {
            yes: 1,
            no: 0,
            maybe: 0,
          }
        },
        {
          index: 9,
          question: `Have you recently been pregnant or given birth?`,
          points: {
            yes: 1,
            no: 0,
            maybe: 0,
          }
        },
        {
          index: 10,
          question: `Does your partner regularly use drugs or alcohol more than 3 times a week?`,
          points: {
            yes: 10,
            no: 0,
            maybe: 0,
          }
        },
        {
          index: 11,
          question: `Does your partner break or throw objects when they are angry?`,
          points: {
            yes: 10,
            no: 0,
            maybe: 0,
          }
        },
        {
          index: 12,
          question: `Has your partner ever threatened to physically harm you or someone close to you? This can include pets.`,
          points: {
            yes: 10,
            no: 0,
            maybe: 0,
          }
        },
        {
          index: 13,
          question: `Do you experience mental health issues? E.g. depression, anxiety.`,
          points: {
            yes: 1,
            no: 0,
            maybe: 0,
          }
        },
        {
          index: 14,
          question: `Does your partner want to know where you are all the time?`,
          points: {
            yes: 1,
            no: 0,
            maybe: 0,
          }
        },
        {
          index: 15,
          question: `Does your partner call or text you constantly, and get angry if you don’t respond?`,
          points: {
            yes: 1,
            no: 0,
            maybe: 0,
          }
        },
        {
          index: 16,
          question: `Has your partner ever pressured you to do something sexual that you did not want to do?`,
          points: {
            yes: 10,
            no: 0,
            maybe: 0,
          }
        },
        {
          index: 17,
          question: `Has your partner been violent on other occasions that did not involve you? For example, have they gotten into physical fights with other people?`,
          points: {
            yes: 5,
            no: 0,
            maybe: 0,
          }
        },
      ]
    }
  }
}
</script>

<style>
.question {
  margin-top: 50px;
  margin-bottom: 50px;
}

.leftButton {
  margin-right: 20px;
}
</style>
