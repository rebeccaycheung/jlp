<template>
  <div id="app">
    <b-navbar>
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
            EMPOWERING RELATIONSHIPS
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item>
                <router-link to="/">Home</router-link>
            </b-navbar-item>
            <b-navbar-item>
                <router-link to="/quiz">Do the quiz</router-link>
            </b-navbar-item>
            <b-navbar-item>
                <router-link to="/help">Where can I get help</router-link>
            </b-navbar-item>
            <b-navbar-item>
                <router-link to="/family-violent">What is family violence?</router-link>
            </b-navbar-item>
            <b-navbar-item>
                <router-link to="/support">How to support a friend?</router-link>
            </b-navbar-item>
            <b-navbar-item>
                <router-link to="/about">About us</router-link>
            </b-navbar-item>
        </template>
        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-primary">
                        <strong>Exit</strong>
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
    <router-view/>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Footer,
  }
}
</script>

<style>
@font-face {
  font-family: "Raleway";
  src: url('./assets/fonts/Raleway-Regular.ttf');
}

#app {
  font-family: Raleway, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}
</style>
