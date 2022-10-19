const fs = require('fs');
const path = require('path');
const db = require("../database/models");
        
module.exports = (req,res,next) =>{
    //Variable locals (super global - vive en las vistas )
    res.locals.user = false;
    if(req.session.user){
        res.locals.user = req.session.user;
        return next();
    }else if(req.cookies.email){
        db.User.findOne({ where:{email : req.body.email }}).then(user=>{
            req.session.user = user;
            res.locals.user = user;
            return next();
        })
        //return res.send(usuario);
        //delete usuario.password;
        req.session.user = user;
        res.locals.user = user;
        return next();
    }else{
        return next();
    }
}
