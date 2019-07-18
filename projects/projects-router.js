const express = require('express');

const Projects = require('./projects-model');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const projects = await Projects.getProjects();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: `No good, sir.` });
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

module.exports = router;
