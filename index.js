const express = require('express');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({ hello: "world" });
})

const port = process.env.PORT || 5000;
server.listen(port)