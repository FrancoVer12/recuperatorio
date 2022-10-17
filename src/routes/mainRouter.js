const express = require('express')
const router = express.Router()
const controller = require('../controllers/mainController')


router.get('/', controller.index);
router.get('/login', controller.login);
router.get('/register', controller.register);
router.get('/movies', controller.list)
router.get('/movies/detail/:id', controller.detail);



module.exports = router;