exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('actions')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('actions').insert([
        {
          action_description: 'some desc',
          project_id: 1,
          action_notes: 'some notes',
          action_completed: 0
        }
      ]);
    });
};
