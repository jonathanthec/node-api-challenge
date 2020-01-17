const verifyProjectUpdate = (req, res, next) => {
    const project = req.body;
    if(!Object.entries(project).length) {
        res.status(400).json({ errorMessage: "invalid action, must provide updating project data" })
    }
    if(!project.name || !project.description) {
        res.status(400).json({ errorMessage: "both updated name and description are required" })
    }

    next();
}

module.exports = verifyProjectUpdate;