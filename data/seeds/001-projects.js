exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('table_name').insert([
        { project_name: 'test1' },
        { project_description: 'asdasdadsdas' },
        { project_complete: '0' },
        { project_name: 'test2' },
        { project_description: 'asdasdadsdas' },
        { project_complete: '0' },
        { project_name: 'test3' },
        { project_description: 'asdasdadsdas' },
        { project_complete: '1' }
      ]);
    });
};
