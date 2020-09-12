module.exports = {
  navigate(context, path) {
    context.$router.push(path).catch((err) => {
      if (
        !err.message.includes(
          "Avoided redundant navigation to current location"
        )
      ) {
        console.error(err);
      }
    });
  },
};
