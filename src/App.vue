<template>
  <v-app id="app">
    <Header v-if="this.currentPage !== 'Auth'" />
    <v-main>
      <v-container class="fill-height" fluid>
        <router-view />
      </v-container>
    </v-main>
    <v-footer app v-if="this.currentPage !== 'Auth'">
      footer
    </v-footer>
  </v-app>
</template>

<style lang="scss">
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

<script>
import Header from "./components/Header.vue";
import userApi from "./api/user";
export default {
  name: "app",
  components: {
    Header,
  },
  data: () => ({
    currentPage: null,
  }),
  created() {
    this.setCurrentPage();
  },
  methods: {
    setCurrentPage() {
      const { name } = this.$router.history.current;
      this.currentPage = name;
    },
  },
  watch: {
    $route() {
      this.setCurrentPage();
    },
  },
};
</script>
