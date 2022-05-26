const { Movie } = require("../database/models");

module.exports = {
    list: (req, res) => {
        Movie.findAll()
            .then(movies => res.render("moviesList", {movies}))
            .catch(error => res.send(error));
    },
    new: (req, res) => {
        Movie.findAll({
            order: [
                ['release_date', 'DESC'] 
            ],
        })
        .then(movies => res.render("newestMovies", {movies}))
        .catch(error => res.send(error));
    },
    recomended: (req, res) => {
        Movie.findAll({
            order: [
                ['rating', 'DESC']
            ], 
            limit: 5,
        })
        .then(movies => res.render("recommendedMovies", {movies}))
        .catch(error => res.send(error));
    },
    detail: (req, res) => {
        Movie.findByPk(req.params.id)
            .then(movie => res.render("moviesDetail", {movie}))
            .catch(error => res.send(error));
    },
}
