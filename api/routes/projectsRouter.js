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

})

router.put('/:id', verifyProjectId, verifyProjectUpdate, (req, res) => {

})

router.delete('/:id', verifyProjectId, (req, res) => {

})

module.exports = router;