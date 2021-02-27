const { Router } = require("express");
const crypto = require("crypto");
const moment = require("moment");

const { Account } = require("../models/account");

const router = new Router();

// router.get("/authenticated", async (req, res) => {
//   const { username } = Session.parse(sessionString);

//   const user = await Account.getAccount({ username });

//   if (!user) {
//     res.send(false);
//   } else {
//     res.send(true);
//   }
// });

router.post("/login", async (req, res, next) => {
  const { username, password } = req.body;

  const errorMessage = "Incorrect username/password";
  try {
    let account = await Account.getAccount({ username });
    if (!account) {
      account = await Account.getAccountByEmail({ email: username });
    }
    if (!account) {
      res.send({ errorMessage });
      return;
    }

    const correctPw = await Account.comparePassword({
      password,
      hashedPassword: account.password
    });
    if (!correctPw) {
      res.send({ errorMessage });
      return;
    } else {
      res.send({ message: "success" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/signup", async function (req, res, next) {
  const { username, email, password } = req.body;

  let account = await Account.getAccount({ username });
  if (!account) {
    account = await Account.getAccountByEmail({ email });
  }
  if (!account) {
    await Account.insertAccount({
      username,
      password,
      email
    });
  } else {
    res.send({ errorMessage: "This username or email has already been taken" });
  }
});

module.exports = router;
