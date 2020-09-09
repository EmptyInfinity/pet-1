const express = require("express");
const app = express();
const port = 4000;
const router = require("./router");
const cors = require("cors");
const { InternalError } = require("./utils/errors");

app.use(cors());
app.use(
  express.json({
    limit: "1MB",
  })
);

app.use(router);

app.use((err, req, res, next) => {
  const { code, message } = err.data || InternalError;
  res.status(code).send(message);
});

(() => {
  initDBConnection = require("./db")();
})();

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
