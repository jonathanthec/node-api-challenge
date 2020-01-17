const express = require('express');
const helmet = require('helmet');

const actionsRouter = require('./routes/actionsRouter');
const projectsRouter = require('./routes/projectsRouter');
const logger = require('./middleware/logger');

const server = express();
server.use(helmet());
server.use(express.json());
server.use('/api/projects', projectsRouter);
server.use('/api/actions', actionsRouter);
server.use(logger);

server.get('/', (req, res) => {
    res.json({ message: "server is up and running" })
})

module.exports = server;