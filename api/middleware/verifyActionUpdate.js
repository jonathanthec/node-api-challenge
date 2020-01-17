const verifyActionUpdate = (req, res, next) => {
    const updatingAction = req.body;
    if(!Object.entries(updatingAction).length) {
        res.status(400).json({ errorMessage: "invalid action, no updating action data" })
    }
    if(!updatingAction.description || !updatingAction.notes) {
        res.status(400).json({ errorMessage: "invalid action, need description and notes fields" })
    }
    if(updatingAction.description && updatingAction.description.length>128) {
        res.status(400).json({ errorMessage: "invalid action, limit description to 128 characters or less" })
    }

    next();
}

module.exports = verifyActionUpdate;