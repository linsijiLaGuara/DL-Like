reuter = require('express').Router()

const { router } = require('express')
const { add_like_controller, get_like_controller } = require('../../controller/controllersLike')

router.get('/posts', get_like_controller)
router.post('/posts', add_like_controller)

module.exposts = router