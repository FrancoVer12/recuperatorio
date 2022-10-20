const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const validationsMovie = require('../middlewares/validationsMovie')


//CREATE
router.get('/add', adminController.add);
router.post('/create', adminController.create);
//UPDATE
router.get('/edit',adminController.edit);
router.put('/update/:id', adminController.update);
//DELETE
router.get('/delete/:id', adminController.deleteVista); 
router.delete('/delete/:id', adminController.delete);


module.exports = router;