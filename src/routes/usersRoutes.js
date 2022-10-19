const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const validationsUser = require('../middlewares/validationsUser');
const validationLogin = require('../middlewares/validationLogin');
//const uploadFile = require("../middlewares/multerMiddlewares");

router.get('/list', userController.list)
router.get('/login', userController.login)
router.post('/login',validationLogin, userController.loginConfirm)
router.get('/register', userController.register)
router.post('/register',validationsUser , userController.registerConfirm)
//router.get('/edit/:id', userController.edit)
//router.put('/edit/:id', userController.saveEdit)
router.get('/logout', userController.logout)


module.exports = router;












/*const express = require('express');
const router = express.Router();

const usersController = require('../controllers/usersController');

const uploadFile = require('../middlewares/multerMiddleware');
const validations = require('../middlewares/validateRegisterMiddleware');

router.get('/register', usersController.register);
router.post('/register', uploadFile.single('avatar'), validations, usersController.processRegister);

router.get('/login', usersController.login);

router.get('/profile/:userId', usersController.profile);

module.exports = router;*/