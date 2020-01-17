const verifyNewAction = (req, res, next) => {
    const action = req.body;
    if(!Object.entries(action).length) {
        res.status(400).json({ errorMessage: "invalid action, no new action data" })
    }
    if(!action.description) {
        res.status(400).json({ errorMessage: "invalid action, need action description" })
    }
    if(!action.notes) {
        res.status(400).json({ errorMessage: "invalid action, need action notes" })
    }
    if(action.description.length>128) {
        res.status(400).json({ errorMessage: "too many characters, limit to 128" })
    }

    next();
}

module.exports = verifyNewAction;