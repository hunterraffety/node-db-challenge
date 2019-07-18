const db = require('../data/db-config');

module.exports = {
  addProject,
  addAction,
  getProjects
};

function addProject(project) {
  //
}

function addAction(action) {
  //
}

function getProjects() {
  return db('projects');
}
