const router = require('express').Router();
const db = require('../../data/helpers/projectModel');
const verifyProjectId = require('../middleware/verifyProjectId');
const verifyNewProject = require('../middleware/verifyNewProject');
const verifyProjectUpdate = require('../middleware/verifyProjectUpdate');

router.get('/', (req, res) => {
    db.get().then(projects => {
        res.status(200).json(projects)
    }).catch(() => {
        res.status(500).json({ message: "server error" })
    })
})

router.get('/:id', verifyProjectId, (req, res) => {
    const { project } = req;
    res.status(200).json(project);
})

router.get('/:id/actions', verifyProjectId, (req, res) => {
    const { project } = req;
    db.getProjectActions(project.id).then(actions => {
        res.status(200).json(actions)
    }).catch(() => {
        res.status(500).json({ message: "server error" })
    })
})

router.post('/', verifyNewProject, (req, res) => {
    const newProject = req.body;
    db.insert(newProject).then(addedProject => {
        res.status(201).json(addedProject)
    }).catch(() => {
        res.status(500).json({ message: "error while creating new project" })
    })
})

router.put('/:id', verifyProjectId, verifyProjectUpdate, (req, res) => {
    const updatingProject = req.body;
    const { id } = req.project;
    db.update(id, updatingProject).then(updatedProject => {
        res.status(201).json(updatedProject)
    }).catch(() => {
        res.status(500).json({ message: "error while updating project" })
    })
})

router.delete('/:id', verifyProjectId, (req, res) => {
    const { id } = req.project;
    db.remove(id).then(() => {
        res.status(201).json({ message: "project has been deleted" })
    }).catch(() => {
        res.status(500).json({ message: "error while deleting project" })
    })
})

module.exports = router;