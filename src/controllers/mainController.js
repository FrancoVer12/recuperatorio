const db = require('../database/models');
const userController = require('./userController');
const sequelize = db.sequelize;

const controller = {
    'index': (req, res) => {
        db.Movie.findAll()
            .then(movies => {
                res.render('index.ejs', {movies: movies})
            })
    },
    'detail': (req, res) => {
        db.Movie.findByPk(req.params.id, {include: [{association: 'genres'}, {association: 'actors'}]})
            .then(movie => {
                console.log(movie)
                res.render('moviesDetail.ejs', {movie: movie})
            })
        },

    'login': (req, res) => {
        res.render('login.ejs')
    },
    'register': (req, res) => {
        res.render('register.ejs')
    },
    'list': (req,res) => {
        db.Movie.findAll()
            .then(movies  => {
                res.render('moviesList.ejs', {movies: movies})
            })
}
}

module.exports = controller;