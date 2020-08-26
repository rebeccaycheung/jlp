<template>
  <div class="question">
    {{ question }}
    <div class="block">
      <b-radio v-model="radio"
          :name="question"
          native-value="Yes">
          Yes
      </b-radio>
      <b-radio v-model="radio"
          :name="question"
          native-value="No">
          No
      </b-radio>
      <b-radio v-model="radio"
          :name="question"
          native-value="Maybe">
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
  },
  data() {
    return {
      radio: ''
    }
  }
}
</script>

<style scoped>
</style>
