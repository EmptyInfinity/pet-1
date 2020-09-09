module.exports = {
  extends: ["plugin:vue/base"],
  rules: {
    "no-unused-vars": "off",
    "vue/no-unused-components": [
      "error",
      {
        ignoreWhenBindingPresent: false,
      },
    ],
  },
};
