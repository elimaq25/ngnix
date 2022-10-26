const express = require('express')
const routerRandom = express.Router()
const {fork} = require('child_process')

routerRandom.get('/randoms', (req, res) => {
    const { cant } = req.query;
    const forked = fork('random.js');
    forked.send(cant || 100000000);
    forked.on("message", (msg) => {
      res.send(msg);
    });
  })

module.exports = routerRandom