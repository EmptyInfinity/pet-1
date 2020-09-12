<template lang="pug">
  v-app(id="app")
    Header(v-if="!this.isAuth")
    v-main
      v-container(class="fill-height" fluid)
        router-view
    v-footer(app v-if="!this.isAuth") footer
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
const authRoutes = ["Login", "Register"];

export default {
  name: "app",
  components: {
    Header,
  },
  data: () => ({
    currentPage: null,
    isAuth: null,
  }),
  created() {
    this.setCurrentPage();
  },
  methods: {
    setCurrentPage() {
      const { name } = this.$router.history.current;
      this.currentPage = name;
      this.isAuth = authRoutes.includes(name);
    },
  },
  watch: {
    $route() {
      this.setCurrentPage();
    },
  },
};
</script>
