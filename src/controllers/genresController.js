const db = require('../database/models')

module.exports = {
    list : (req,res) => {
        db.Genre.findAll()
           .then((genres) =>{
               res.render("genresList", {
                   genres
               })
           })
           .cath((error) => res.send(error))

        },
    detail: (req,res) => {
        db.Genre.findByPk(req.params.id)
           .then((genres) => res.render("genresDetail",{
                 genres
        }))

        .cath((error) => res.send(error))

        }
       
}
