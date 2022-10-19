const { validationResult } = require('express-validator');
const db = require('../database/models');
const validationLogin = require('../middlewares/validationLogin');
const bcrypt = require('bcrypt');
const sequelize = db.sequelize;
const { localsName } = require("ejs");


const userController = {
    'list': (req, res) => {
        db.User.findAll()
            .then(users => {
                res.render('users.ejs', {users: users})
            })
    },
    'login': (req, res) => {
        if(req.session.user){
            res.redirect('/')

        }else{
        res.render('login')
        }
    },
    'register': (req, res) => {
        if(req.session.user){
            res.redirect('/')

        }else{
        res.render('register')
        }
    },
    'registerConfirm':(req,res)=>{
        
        const resultValidation = validationResult(req);
        console.log(resultValidation.errors)
        if(resultValidation.errors.length>0){
            res.render('register',{errors:resultValidation.mapped()})
        }
        db.User.create({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            rol:0
                })
                if(resultValidation.errors.length<=0){
                    db.User.findOne({ where:{email : req.body.email }})
            .then(()=>{
                //console.log(body)
                console.log(req.body)
                res.redirect('/')
            })}
        },
    
    'loginConfirm':(req,res)=>{ 

        const resultValidation = validationResult(req);
        console.log(resultValidation.errors.length)
        console.log(req.body)
        if(resultValidation.errors.length<=0){
        db.User.findOne({ where:{email : req.body.email }})
        .then(user =>{
            //console.log(password)
            
            if(user){
                const validPassword = req.body.password
                if (validPassword) {
                    req.session.usuario = user;
                    console.log("inicio sesion")
                    res.redirect("/")
                }
                else{
                    console.log("error")
                    res.redirect("/login")
                }
            }else{
                res.redirect("/login")
            }
        })
    }else{
        res.render('login',{errors:resultValidation.mapped()})
    }
        },
    'logout': (req, res) => {
        req.session.destroy();
        res.cookie('email',null,{maxAge: -1});
        res.redirect('/')
    }
    
}


module.exports = userController;