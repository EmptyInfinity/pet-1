const DATABASE_URL = process.env.MONGO_URL;
const mongoose = require("mongoose");

const initDbConnection = () => {
  mongoose.connect(
    DATABASE_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    },
    () => {
      console.log(`Connected to db ${mongoose.connection.name}`);
    }
  );
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error: "));
  db.once("open", () => {
    console.log("DB Connected!");
  });
};

module.exports = initDbConnection;
