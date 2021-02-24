const { knex } = require("../db/config/config");

class Account {
  static insertAccount = async ({
    username,
    password,
    email,
    verify_email_token,
    verify_email_expiry,
  }) => {
    try {
      const user = await knex("users").insert({
        username,
        password,
        email,
        verify_email_token,
        verify_email_expiry,
      });
      return user;
    } catch (err) {
      console.log(err);
    }
  };

  static getAccount = async ({ username }) => {
    try {
      const user = await knex("users")
        .where("username", "ilike", username)
        .first();
      return user;
    } catch (err) {
      console.log(err);
    }
  };
}

module.exports = { Account };
