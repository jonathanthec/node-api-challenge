const ProjectsDB = require('../../data/helpers/projectModel');

const verifyProjectId = (req, res, next) => {
    const id = req.originalUrl.includes('/api/projects/') && req.params.id || req.body.project_id;
    if(!id) {
        res.status(400).json({ errorMessage: "the project id is invalid" })
    }

    ProjectsDB.get(id).then(project => {
        if(project) {
            req.project = project;
            next();
        }
        else {
            res.status(404).json({ errorMessage: "the project with given id does not exist" });
        }
    }).catch(() => {
        res.status(500).json({ message: "internal error" })
    })
}

module.exports = verifyProjectId;