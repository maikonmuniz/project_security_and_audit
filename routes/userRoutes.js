const router = require('express').Router()

const UserController = require('../controllers/UserController')
// const verifyToken = require("../helpers/verify-token")


router.post('/register', UserController.register)

router.post('/login',  UserController.login)
// router.get('/:id', UserController.getUserById)
// router.patch('/edit/:id', verifyToken,  UserController.editUser)

// upload.single("file"),
module.exports = router