const express = require('express');
const server = express();

const actionsRouter = require('./routes/actionsRouter');
const projectsRouter = require('./routes/projectsRouter');
const logger = require('./middleware/logger');

server.use(express.json());
server.use(logger);
server.use('/api/projects', projectsRouter);
server.use('/api/actions', actionsRouter);

server.get('/', (req, res) => {
    res.json({ message: "server is up and running" })
})

module.exports = server;