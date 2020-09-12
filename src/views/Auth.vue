<template lang="pug">
  v-row(justify='center')
    v-col(cols='12' sm='8' md='5' style='max-width: 420px')
      v-card
        v-container.spacing-playground.px-8
          v-row
            v-col
              form
                v-text-field(
                  v-model='name' 
                  :rules='getRules("name")' 
                  :counter='50' 
                  label='Name' 
                )
                v-text-field(
                  v-model='email' 
                  :rules='getRules("email")' 
                  label='E-mail' 
                )
                v-text-field(
                  v-model='password' 
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" 
                  :rules='getRules("password")' 
                  :type="showPassword ? 'text' : 'password'" 
                  name='password' 
                  label='Password' 
                  counter='' 
                  @click:append='showPassword = !showPassword'
                )
                v-btn.mr-4(@click='submit') submit
                v-btn(@click='clear') clear
                p {{current}}
</template>

<script>
const emailRegEx = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const rules = {
  password: {
    required: (v) => !!v || "Password is required.",
    min: (v) => v.length >= 6 || "Password must be at least 6 characters long",
    max: (v) =>
      v.length <= 100 || "Password must be at most 100 characters long",
  },
  email: {
    required: (v) => !!v || "Email is required.",
    valid: (v) => emailRegEx.test(v) || "Must be valid e-mail",
  },
  name: {
    max: (v) => v.length <= 50 || "Name must be at most 50 characters long",
  },
};

export default {
  data: () => ({
    current: null,
    name: "",
    email: "",
    password: "",
    showPassword: false,
    rules,
  }),

  methods: {
    getRules(type) {
      const list = [];
      Object.keys(rules[type]).forEach((key) => {
        list.push(rules[type][key]);
      });
      return list;
    },
    submit() {
      this.$v.$touch();
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.email = "";
      this.password = "";
    },
  },
};
</script>
