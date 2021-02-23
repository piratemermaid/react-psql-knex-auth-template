const { Router } = require("express");

const router = new Router();

router.get("/", (req, res) => {
  res.send("account route");
});

module.exports = router;
