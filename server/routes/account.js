const { Router } = require("express");
const crypto = require("crypto");
const moment = require("moment");

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

router.post("/send_verification_on_signup", async function (req, res, next) {
  const { username, email, password } = req.body;

  let account = await Account.getAccount({ username });
  if (!account) {
    account = await Account.getAccountByEmail({ email });
  }
  if (!account) {
    // TODO: use generated token
    const token = crypto.randomBytes(6).toString("hex");
    const tokenExpiry = moment().add(2, "hours").utc().toISOString();
    await Account.insertAccount({
      username,
      password,
      email,
      verify_email_token: "123456",
      verify_email_expiry: tokenExpiry,
    });
  } else {
    res.send({ errorMessage: "This username or email has already been taken" });
  }
});

module.exports = router;
