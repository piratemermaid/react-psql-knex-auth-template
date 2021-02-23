const { Router } = require("express");

const router = new Router();

router.get("/", (req, res) => {
  res.send("user route");
});

module.exports = router;
