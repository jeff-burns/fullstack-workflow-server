
exports.up = function(knex, Promise) {
    return knex.schema.createTable('dog', (table) => {
        table.increments();
        table.text('name').notNullable();
        table.text('description').notNullable();
        table.text('imageUrl').notNullable();
        table.text('imageCaption').notNullable();

    })
  
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('dog');
};
