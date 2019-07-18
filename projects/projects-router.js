const express = require('express');

const Projects = require('./projects-model');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const projects = await Projects.getProjects();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: 'No good, sir.' });
  }
});

module.exports = router;
