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
            <b-button type="is-light" class="leftButton">
              <router-link to="/quiz">{{ leftButton }}</router-link>
            </b-button>
            <b-button type="is-light">
              <router-link to="/quiz">{{ rightButton }}</router-link>
            </b-button>
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
  components: {
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
