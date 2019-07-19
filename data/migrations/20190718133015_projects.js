exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
      tbl.increments();

      tbl
        .string('project_name', 128)
        .notNullable()
        .unique();
      tbl.string('project_description').notNullable();
      tbl.boolean('project_complete').notNullable();
    })
    .createTable('actions', tbl => {
      tbl.increments();

      tbl
        .integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
      tbl.string('action_description').notNullable();
      tbl.string('action_notes').nullable();
      tbl.boolean('action_completed').notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('projects').dropTableIfExists('actions');
};
