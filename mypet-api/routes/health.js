'use strict';

const router = require('express').Router();

router.get('/health', (req, res) => {
    const {name} = req.query;

    res.send(`Hello ~ ${name}`);
});

module.exports = router;
