const express = require("express");
const router = express.Router();
const { createUser } = require("../controllers/userController");

router.post("/", createUser);
router.get("/", (req, res) => {
  res.send("User route working");
});

module.exports = router;
