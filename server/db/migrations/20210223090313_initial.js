exports.up = async function (knex) {};

module.exports.down = async function (knex) {
  const tableOrder = [];
  for (let i in tableOrder) {
    await knex.schema.dropTableIfExists(tableOrder[i]);
  }
};
