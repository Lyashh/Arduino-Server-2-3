
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('temperature').del()
    .then(function () {
      // Inserts seed entries
      return knex('temperature').insert([
        {title: 'rowValue1'},
      ]);
    });
};
