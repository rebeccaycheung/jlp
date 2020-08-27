<template>
  <div>
    {{ question }}
    <div class="block">
      <b-radio v-model="radio"
          :name="question"
          native-value="0">
          Yes
      </b-radio>
      <b-radio v-model="radio"
          :name="question"
          native-value="2">
          No
      </b-radio>
      <b-radio v-model="radio"
          :name="question"
          native-value="1">
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
  },
  watch: {
    radio() {
      const payload = {
        index: this.index,
        num: Number(this.radio)
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
