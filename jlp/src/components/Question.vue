<template>
  <div>
    <h5 class="title is-5">{{ question }}</h5>
    <div class="field">
      <b-radio v-model="radio"
          :name="question"
          :native-value="yes">
          {{ yesText }}
      </b-radio>
    </div>
    <div class="field">
      <b-radio v-model="radio"
          :name="question"
          :native-value="no">
          {{ noText }}
      </b-radio>
    </div>
    <div class="field" v-if="maybeText">
      <b-radio v-model="radio"
          :name="question"
          :native-value="maybe">
          {{ maybeText }}
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
    yesText: String,
    noText: String,
    maybeText: String,
  },
  watch: {
    radio() {
      const index = this.index
      const payload = {
        [index]: Number(this.radio),
      }
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
