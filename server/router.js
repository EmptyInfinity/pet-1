const router = require("express").Router();
// const verifyToken = require("./verifyToken");
const loginHandler = require("./routes/loginHandler");
const registerHandler = require("./routes/registerHandler");

// router.get('/user', verifyToken, getCurrentUser);

router.get("/api", (req, res) => res.send("Hello World!"));

router.post("/api/login", loginHandler);
router.post("/api/register", registerHandler);

module.exports = router;
