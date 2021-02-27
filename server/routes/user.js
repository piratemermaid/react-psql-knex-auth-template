const { Router } = require("express");
const { Account } = require("../models/account");

const router = new Router();

router.get("/", async (req, res) => {
  res.send("user route");
});

module.exports = router;
