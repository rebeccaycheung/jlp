<template>
  <div class="home">
    <section class="hero is-primary is-fullheight-with-navbar is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-1">
            {{ title }}
          </h1>
          <div class="subtitle">
            {{ description }}
          </div>
          <div class="subtitle">
            {{ desc }}
          </div>
          <div class="button-container">
            <router-link to="/quiz">
              <b-button type="is-light" class="button leftButton" v-on:click="onClick(0)">
                {{ leftButton }}
              </b-button>
            </router-link>
            <router-link to="/quiz">
              <b-button type="is-light" class="button" v-on:click="onClick(1)">
                {{ rightButton }}
              </b-button>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  methods: {
    onClick(index) {
      console.log(index)
      switch (index) {
        case 0:
          this.$store.commit('setQuiz', 0)
          break
        case 1:
          this.$store.commit('setQuiz', 1)
          break
      }
    }
  },
  data() {
    return {
      title: `What is the quiz?`,
      description: `This tool was created to help identify some signs of an unhealthy relationship.
                    Often, these can be the precursors to abusive situations. The questions are most
                    helpful when answered honestly. If you do not know the answer to a question, click 'No'.`,
      desc: `No record is kept of your responses. The quiz should take roughly 5-10 minutes to complete.`,
      leftButton: `Take the quiz for yourself`,
      rightButton: `Take the quiz for a friend`
    }
  }
}
</script>

<style scoped>
.button-container {
  margin-top: 10px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.leftButton {
  margin-right: 20px;
}

.button {
  width: 200px;
  margin-top: 10px;
}
</style>
