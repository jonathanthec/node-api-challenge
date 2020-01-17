const router = require('express').Router();
const db = require('../../data/helpers/projectModel');
const verifyProjectId = require('../middleware/verifyProjectId');

router.get('/', (req, res) => {

})

router.get('/:id', verifyProjectId, (req, res) => {
    
})

router.get('/:id/actions', verifyProjectId, (req, res) => {
    
})

router.post('/', (req, res) => {

})

router.put('/', (req, res) => {

})

router.delete('/', (req, res) => {

})

module.exports = router;