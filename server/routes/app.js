const { Router } = require("express");

const router = new Router();

router.get("/", (req, res) => {
  res.send("app route");
});

module.exports = router;
