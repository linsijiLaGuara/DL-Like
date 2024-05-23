const { likeCollection } = require('../database/models/likesModels')

const add_like_controller = async (req, res, next) => {
    try {
        const { titulo,url,descripcion } = req.body
        const response =  likeCollection.AddLike(titulo,url,descripcion)
        res.send(response)
    }
    catch (error) {
        next(error)
    }
}

const get_like_controller = async (req, res, next) => {
    try {
        const response = await likeCollection.getLike()
        res.send(response)
    }
    catch (error) {
        next(error)
    }
}

module.exports = {
    add_like_controller,
    get_like_controller
}
