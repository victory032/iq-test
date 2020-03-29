<template>
  <v-app :style="checkMyBg">
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-text>
          Welcome {{ name }}
        </v-text>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        disabled
      >
        <span class="mr-2">Score: {{ score }}</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
      <Footer />
  </v-app>
 
</template>

<script>
import footer from './components/Footer'
export default {
  components: {
    Footer: footer
  },
  name: 'App',
  data: () => ({
   
  }),
  computed: {
    score() {
      return this.$store.getters.score
    },
    name() {
      return this.$store.getters.name
    },
    checkMyBg() {
      return {
        background: this.$store.getters.checkBg
      }
    }
  }
};
</script>
