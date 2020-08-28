<template>
  <div class="home">
    <section class="hero is-primary is-fullheight-with-navbar is-bold">
      <div class="hero-body">
        <div class="container">
          <p class="title">
            {{ title }}
          </p>
          <p>
            {{ description }}
          </p>
          <div class="button-container">
            <router-link to="/quiz">
              <b-button type="is-light" class="leftButton" v-on:click="onClick(0)">
                {{ leftButton }}
              </b-button>
            </router-link>
            <router-link to="/quiz">
              <b-button type="is-light" v-on:click="onClick(1)">
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
                    helpful when answered honestly. No record is kept of your responses. The quiz
                    should take roughly 5-10 minutes to complete.`,
      leftButton: `Take the quiz for yourself`,
      rightButton: `Take the quiz for a friend`
    }
  }
}
</script>

<style scoped>
.button-container {
  margin-top: 10px;
}

.leftButton {
  margin-right: 20px;
}
</style>
