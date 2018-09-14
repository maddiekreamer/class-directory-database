
exports.up = function(knex, Promise) {
  return knex.schema.createTable('class_table', (directory) => {
    directory.increments('id')
    directory.string('first')
    directory.string('last')
    directory.string('lat')
    directory.string('long')
    directory.integer('favAnimal')
  })
};

exports.down = function(knex, Promise) {
  
};
