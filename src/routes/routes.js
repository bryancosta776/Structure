const express = require('express');

const router = express.Router();

const errorMiddleware = require('../middleware/errorMiddleware');

router.use(express.json());


const get = require('../controller/getQueryController')

const regCtrl = require('../controller/registerController');

router.get('/search', regCtrl);

router.use(users);
router.use(operations);
router.use(payments);

router.use(errorMiddleware);

module.exports = router;
