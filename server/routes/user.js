const { Router } = require("express");
const { Account } = require("../models/account");
const { Session } = require("../models/session");

const router = new Router();

router.get("/authenticated", async (req, res) => {
  const { sessionString } = req.cookies;

  const verified = await Session.verify(sessionString);
  if (!sessionString || !verified) {
    res.send(false);
    return;
  } else {
    const { username, id } = Session.parse(sessionString);

    const user = await Account.getAccount({ username });

    if (!user) {
      res.send(false);
    } else {
      res.send(true);
    }
  }
});

module.exports = router;
