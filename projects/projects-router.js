const express = require('express');

const Projects = require('./projects-model');

const router = express.Router();

router.use(express.json());

router.get('/', async (req, res) => {
  try {
    const projects = await Projects.getProjects();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: `No good, sir.` });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const actions = await Projects.getActionsByProjectId(id);
  console.log(id);
  try {
    const project = await Projects.getProjectById(id);
    if (project) {
      res.json(project, actions);
    } else {
      res
        .status(404)
        .json({ message: `Couldn't find a project with that id: ${id}.` });
    }
  } catch (error) {
    res.status(500).json({ message: `There was an error with your request.` });
  }
});

router.post('/', async (req, res) => {
  const project = req.body;
  if (Object.keys(project).length === 0) {
    res.status(400).json({
      message: `Please provide some input: name, description, and completion status.`
    });
  } else {
    try {
      const newProject = await Projects.addProject(project);
      res.status(201).json(newProject);
    } catch (error) {
      res.status(500).json({ message: `Can't create your project, sir.` });
    }
  }
});

router.post('/:id/actions', async (req, res) => {
  const { id } = req.params;
  const action = req.body;
  try {
    const project = await Projects.getProjectById(id);
    if (project) {
      const newAction = await Projects.addAction(action);
      console.log(`action`, action);
      res.status(201).json(action);
    } else {
      res
        .status(404)
        .json({ message: `Could not find a project with given ${id}.` });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
