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
          :yesText="question.text.yes"
          :noText="question.text.no"
          :maybeText="question.text.maybe"
        />
      </div>
    </div>
    <div class="button-container">
      <b-button v-if="start > 6" type="is-light" v-on:click="prev()" class="leftButton">Previous</b-button>
      <b-button v-if="start <= $options.questions.length" type="is-primary" v-on:click="next()" class="leftButton">Next</b-button>
      <b-button v-if="start > $options.questions.length" type="is-primary" v-on:click="finish()">Finish</b-button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Question from '@/components/Question.vue'
import questionJson from '@/json/quiz.json'

export default {
  name: 'Quiz',
  components: {
    Question
  },
  questions: questionJson,
  mounted() {
    this.currentQuestions = this.$options.questions.slice(this.start, this.end)
    this.start = this.start + 6
    this.end = this.start + 6
  },
  methods: {
    next() {
      this.prevQuestions = this.currentQuestions
      this.currentQuestions = this.$options.questions.slice(this.start, this.end)

      this.start = this.start + 6
      this.end = this.start + 6

      this.index += 1
      this.progress += 33.33
    },
    prev() {
      this.start = this.start - 6
      this.end = this.start + 6

      this.currentQuestions = this.prevQuestions
      this.prevQuestions = this.$options.questions.slice(this.start-12, this.end-12)

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
