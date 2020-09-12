<template lang="pug">
  div(class="user")
    v-menu(v-if="user" bottom offset-y transition="slide-y-transition")
      template(v-slot:activator="{ on, attrs }") 
        span(class="mr-2") {{user.name}} 
        v-icon(medium v-on="on") account_circle
      v-list
        v-list-item(v-for="(item, i) in items" :key="i" @click="() => {}")
          v-list-item-title {{ item.title }}
    div(class="auth-btns")
      v-btn(outlined x-small @click="auth()") Sign Up
      v-btn(outlined x-small @click="auth(true)" class="ml-1" ) Log In
</template>

<script>
import { mapGetters } from "vuex";
import { navigate } from "@/helper.js";

export default {
  name: "User",
  components: {},
  data: () => ({
    items: [
      {
        title: "Profile",
      },
      {
        title: "Settings",
      },
      {
        title: "Notifications",
      },
      {
        title: "Sign out",
      },
    ],
  }),
  computed: {
    ...mapGetters(["user"]),
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    auth(registered) {
      // this.$router.push(registered ? "/login" : "/register");
      navigate(this, registered ? "/login" : "/register");
    },
  },
};
</script>

<style lang="scss" scoped>
.user {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
</style>
