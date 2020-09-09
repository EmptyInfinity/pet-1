<template>
  <div class="Main">
    <!-- <img alt="Vue logo" src="@/assets/images/worker.jpg" /> -->
  </div>
</template>

<script>
// import HelloWorld from "@/components/HelloWorld.vue";
import UserApi from "@api/user";

export default {
  name: "Main",
  components: {},
  data() {
    return {
      form: {
        email: "someemail@gmail.com",
        password: "password",
      },
    };
  },
  computed: {
    validated() {
      const { email, password } = this.form;
      return email.length > 10 && password.length > 6;
    },
  },
  methods: {
    onSubmitRegister(e) {
      e.preventDefault();
      if (this.validated) {
        const { email, password } = this.form;
        UserApi.register(email, password)
          .then((resp) => {})
          .catch(console.log);
      }
    },
    onSubmit(evt) {
      evt.preventDefault();
      if (this.validated) {
        const { email, password } = this.form;
        UserApi.login(email, password)
          .then((resp) => {})
          .catch(console.log);
      }
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>
<style lang="scss" scoped></style>
