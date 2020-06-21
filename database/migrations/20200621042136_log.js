exports.up = function(knex) {
    return knex.schema
    .createTable('log', log => {
      log.increments();
      log.datetime('time_triggered').defaultTo(knex.fn.now());
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists('log')
  };
  