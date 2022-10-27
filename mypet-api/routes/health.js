'use strict';

const express = require('express');
const router = express.Router();

const healthController = require('../controller/health')

router.get('/health', async(req, res) => {
	const { name } = req.query;
	const data = await healthController.checkHealth({ name })
	res.json({data: `Hello ~ ${data}`});
});

module.exports = router;
