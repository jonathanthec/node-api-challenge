const ActionsDB = require('../../data/helpers/actionModel');

const verifyActionId = (req, res, next) => {
    const id = req.params.id;
    if(!id) {
        res.status(400).json({ errorMessage: "the action id is invalid" })
    }

    ActionsDB.get(id).then(action => {
        if(action) {
            req.action = action;
            next();
        }
        else {
            res.status(404).json({ errorMessage: "the project action be retrieved, invalid id" });
        }
    }).catch(() => {
        res.status(500).json({ message: "internal error" })
    })
}

module.exports = verifyActionId;