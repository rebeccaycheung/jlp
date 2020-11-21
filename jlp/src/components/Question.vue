<template>
  <div>
    <div class="question-container">
      <h5 class="title is-5">{{ question }}</h5>
      <div v-if="popUp">
        <div class="popUpIcon">
          <font-awesome-icon icon="question-circle" class="fa fa-1x" v-on:click="showPopUp" style="cursor: pointer"/>
        </div>
      </div>
    </div>
    <div v-if="!isHidden" class="popUp">
      <b-message type="is-info">
        <b>Did you know:</b>
          {{ popUp }}
      </b-message>
    </div>
    <div v-if="!popUp" style="padding: 10px"></div>
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
    popUp: String,
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
      radio: null,
      isHidden: true,
    }
  },
  methods: {
    showPopUp() {
      if (this.isHidden) {
        this.isHidden = false
      } else {
        this.isHidden = true
      }
    },
  }
}
</script>

<style scoped>
.question-container {
  display: flex;
  align-content: center;
  justify-items: center;
}

.popUpIcon {
  margin-left: 10px;
}

.popUp {
  margin-bottom: 20px;
}
</style>
