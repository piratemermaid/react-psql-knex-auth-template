exports.up = async function (knex) {
  await knex.schema.createTable("users", (table) => {
    table.increments("id").unsigned().primary();
    table.string("username").unique().notNullable();
    table.string("password").notNullable();
    table.string("email").unique().notNullable();
    table.string("sessionId");
    table.string("verify_email_token");
    table.timestamp("verify_email_expiry");
    table.boolean("verified");
    table.string("reset_pw_token");
    table.timestamp("reset_pw_expiry");
  });
};

module.exports.down = async function (knex) {
  const tableOrder = ["users"];
  for (let i in tableOrder) {
    await knex.schema.dropTableIfExists(tableOrder[i]);
  }
};
