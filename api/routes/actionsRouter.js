const router = require('express').Router();
const db = require('../../data/helpers/actionModel');
const verifyProjectId = require('../middleware/verifyProjectId');
const verifyActionId = require('../middleware/verifyActionId');
const verifyNewAction = require('../middleware/verifyNewAction');

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

router.post('/', verifyProjectId, verifyNewAction, (req, res) => {
    const action = req.body;
    db.insert(action).then(newAction => {
        res.status(201).json(newAction)
    }).catch(() => {
        res.status(500).json({ message: "error while posting new action" })
    })
})

router.put('/:id', (req, res) => {

})

router.delete('/:id', (req, res) => {

})

module.exports = router;