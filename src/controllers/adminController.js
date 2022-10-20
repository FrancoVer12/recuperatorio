const db = require('../database/models');
const { validationResult } = require("express-validator");
const sequelize = db.sequelize;


const adminController = {
    'add': (req, res) => {
                res.render('addMovies.ejs')
            },
    'create': (req, res) => {
        const resultValidation = validationResult(req);
        console.log(resultValidation.errors)
        if(resultValidation.errors.length>0){
            res.render('index.ejs',{errors:resultValidation.mapped()})
        }else{
                let movie = {
                    title: req.body.title,
                    rating: req.body.rating,
                    awards: req.body.rating,
                    release_date: req.body.release_date,
                    length: req.body.length,
                }
                db.Movie.create(movie)
                res.redirect('/')
            }
        },
    'edit': (req, res) => {
        db.Movie.findByPk(req.params.id)
            .then(Movie => {
                res.render('editMovies.ejs', {Movie: Movie})
            })
    },
    'update': (req, res) => {
        let movie = {
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            release_date: req.body.release_date,
            length: req.body.length
        }
        db.Movie.update(movie, {where:{id: req.params.id}})
        res.redirect('/')
    },
    'deleteVista': (req, res) => {
        db.Movie.findByPk(req.params.id)
            .then(Movie => {
                res.render('deleteMovies.ejs', {Movie: Movie})
            })
    },
    'delete': (req, res) => {
        db.Movie.destroy({where:{id: req.params.id}})
        res.redirect('/')
    }
}



module.exports = adminController;