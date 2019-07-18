const db = require('../data/db-config');

module.exports = {
  addProject,
  addAction,
  getProjects,
  getProjectById
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
            .then(actions => {
              console.log(actions);
              return {
                project,
                actions
              };
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
