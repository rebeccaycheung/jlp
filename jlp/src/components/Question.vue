<template>
  <div>
    {{ question }}
    <div class="block">
      <b-radio v-model="radio"
          :name="question"
          :native-value="yes">
          Yes
      </b-radio>
      <b-radio v-model="radio"
          :name="question"
          :native-value="no">
          No
      </b-radio>
      <b-radio v-model="radio"
          :name="question"
          :native-value="maybe">
          Maybe
      </b-radio>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Question',
  props: {
    question: String,
    index: Number,
    yes: Number,
    no: Number,
    maybe: Number,
  },
  watch: {
    radio() {
      const payload = {
        index: this.index,
        num: Number(this.radio)
      }
      console.log(this.$store.state.questions)
      this.$store.commit('setQuestion', payload)
    }
  },
  data() {
    return {
      radio: null
    }
  },
}
</script>
