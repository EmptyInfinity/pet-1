<template lang="pug">
  v-app-bar(app)
    div(class="content") 
      div logo
      ul(class="d-flex")
        li(v-for="(link, i) in links" :key="i")
          a(:href="link.url") {{link.label}}
      User
</template>

<script>
import User from "@components/User.vue";

const links = [
  {
    url: "#",
    label: "main",
  },
  {
    url: "#",
    label: "about us",
  },
  {
    url: "#",
    label: "works",
  },
  {
    url: "#",
    label: "contacts",
  },
];

export default {
  name: "Header",
  components: {
    User,
  },
  data: () => ({
    links,
  }),
  computed: {
    logined() {
      return !!this.$store.state.user;
    },
  },
  methods: {
    // goToUser() {
    //   this.$router.push(this.logined ? "profile" : "auth");
    // },
  },
};
</script>

<style scoped lang="scss">
.content {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > div {
    flex: 1;
  }
}
a {
  padding: 3px;
  margin: 0 8px;
}
</style>
