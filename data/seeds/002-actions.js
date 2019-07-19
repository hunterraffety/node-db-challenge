exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('table_name').insert([
        { action_description: 'some desc' },
        { action_notes: 'rasasasdasdasd' },
        { action_completed: '0' },
        { action_description: 'another desc' },
        { action_notes: 'fdsfsfdsdfsdfsdf' },
        { action_completed: '1' },
        { action_description: 'hello desc' },
        { action_notes: 'some notezzzz' },
        { action_completed: '0' }
      ]);
    });
};
