const db = require('../data/db-config');

module.exports = {
  addProject,
  addAction,
  getProjects,
  getProjectById,
  getActionsByProjectId,
  deleteProject,
  updateProject
};

function addProject(project) {
  return db('projects')
    .insert(project)
    .then(id => ({ id }))
    .catch(error => {
      res.status(500).json(error);
    });
}

function addAction(action) {
  return db('actions')
    .insert(action)
    .then(id => ({ id }))
    .catch(error => {
      res.status(500).json(error);
    });
}

// need to get actions along with project.
function getProjectById(id) {
  return db('projects')
    .where({ id })
    .first()
    .then(project => {
      if (project) {
        // return actions table
        return (
          db('actions')
            // find the id, son.
            .where({ project_id: id })
            .select(
              'id',
              'action_notes',
              'action_description',
              'action_completed'
            )
            .then(actions => {
              // console.log(actions);
              // console.log(`--------------`, project);
              return { ...project, actions };
            })
        );
      } else {
        return null;
      }
    });
}

function getProjects() {
  return db('projects');
}

function deleteProject(id) {
  return db('projects')
    .where({ id })
    .del();
}

function updateProject(changes, id) {
  return db('projects')
    .where({ id })
    .update(changes);
}

function getActionsByProjectId(id) {
  return db('actions').where({ project_id: id });
  // returns an array of actions for a given project.
}
