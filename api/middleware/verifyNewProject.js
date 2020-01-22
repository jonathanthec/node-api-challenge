const verifyNewProject = (req, res, next) => {
    const project = req.body;
    if(!Object.entries(project).length) {
        res.status(400).json({ errorMessage: "invalid action, no new project data" })
    }
    if(!project.name) {
        res.status(400).json({ errorMessage: "invalid action, need project name" })
    }
    if(!project.description) {
        res.status(400).json({ errorMessage: "invalid action, need project description" })
    }

    next();
}

module.exports = verifyNewProject;