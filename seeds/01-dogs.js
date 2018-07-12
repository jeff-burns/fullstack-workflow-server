
const dogs = require('../data/dogs-seed-data');

exports.seed = async function(knex, Promise) {
  // Deletes ALL existing entries
  await knex('dog').del()
      // Inserts seed entries
  await knex('dog').insert(dogs);
};
