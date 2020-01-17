const router = require('express').Router();
const db = require('../../data/helpers/actionModel');
const verifyProjectId = require('../middleware/verifyProjectId');
const verifyActionId = require('../middleware/verifyActionId');

router.get('/', (req, res) => {
    db.get().then(actions => {
        res.status(200).json(actions)
    }).catch(() => {
        res.status(500).json({ message: "error while accessing all actions" })
    })
})

router.get('/:id', verifyActionId, (req, res) => {
    const { action } = req;
    res.status(200).json(action);
})


module.exports = router;