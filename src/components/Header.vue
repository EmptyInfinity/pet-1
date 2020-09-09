<template>
  <v-app-bar app>
    header
  </v-app-bar>
</template>

<script>
import User from "../assets/images/User.vue";
export default {
  name: "Header",
  components: {
    User,
  },
  computed: {
    logined() {
      return !!this.$store.state.user;
    },
  },
  methods: {
    goToUser() {
      this.$router.push(this.logined ? "profile" : "auth");
    },
  },
};
</script>

<style scoped lang="scss">
header {
  border-radius: 0 0 35px 35px;
  background-color: #ffa726;
  box-shadow: 0px 2px 6px #00000063;
  color: #0d0d0e;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
nav {
  display: flex;
  padding-left: 50px;
}
a {
  margin-right: 30px;
  color: #1b1b25;
  font-weight: 600;
}
.user {
  cursor: pointer;
}
</style>
