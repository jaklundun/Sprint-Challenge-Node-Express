const express = require('express');
const cors = require('cors');

const projects = require('./data/helpers/projectModel.js');
const actions = require('./data/helpers/actionModel.js');

const port = 8888;
const server = express();
server.use(express.json());
server.use(cors({ origin: 'http://localhost:3333' }));


// GET Ends
server.get('/api/projects', (req, res) => {
    projects.get()
        .then(projects => {
            res.json({ projects })
        })
        .catch(err => {
            res.json({ err })
        })
})
 server.get('/api/actions', (req, res) => {
    actions.get()
        .then(actions => {
            res.json({ actions })
        })
        .catch(err => {
            res.json({ err })
        })
})


// GET by ID

server.get('/api/projects/:id', (req, res) => {
    let { id } = req.params;
    projects.get(id)
        .then(project => {
            res.json({ project })
        })
        .catch(err => {
            res.status(400).json({ errorMessage: `No project found with id of ${id}` });
        })
})
 server.get('/api/actions/:id', (req, res) => {
    let { id } = req.params;
    actions.get(id)
        .then(action => {
            res.json({ action })
        })
        .catch(err => {
            res.status(400).json({ errorMessage: `No action found with id of ${id}` });
        })
})

server.listen(port, () => console.log(`Server running on port ${port}`));