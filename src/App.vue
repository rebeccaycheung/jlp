<template>
  <div id="app">
    <b-navbar>
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
            <img src="@/assets/logo.png" />
            EMPOWERING RELATIONSHIPS
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item>
                <router-link to="/quiz">Quiz</router-link>
            </b-navbar-item>
            <b-navbar-item>
                <router-link to="/help">Getting Help</router-link>
            </b-navbar-item>
            <b-navbar-item>
                <router-link to="/family-violence">Family Violence</router-link>
            </b-navbar-item>
            <b-navbar-item>
                <router-link to="/support">Supporting a Friend</router-link>
            </b-navbar-item>
            <b-navbar-item>
                <router-link to="/about">About Us</router-link>
            </b-navbar-item>
        </template>
        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-danger" href="https://google.com">
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

.root {
    margin: 80px 50px 100px 50px;
}

img {
    padding-right: 5px;
}
</style>
