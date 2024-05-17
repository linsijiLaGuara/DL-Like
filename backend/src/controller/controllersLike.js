const { likeCollection } = require('../database/models/likesModels')

const add_like_controller = async(req, res, next) = {
    try {
        const { titulo } = req.body
        const response = await likeCollection.addLike(titulo)
        res.send(response)

    }
    catch(error) {
        next(error)
    }


}

const git_like_controller = async (req, res, next){
    try {
        const { titulo } = req.body
        const response = await likeCollection.getLike(titulo)
        res.send(response)

    }
    catch (error) {
        next(error)
    }


}

module.exposts = {
    add_like_controller,
    git_like_controller
}