const router = require('express').Router()

const routerInvoke = require('./routersInvoque')

router.use('/like', routerInvoke)