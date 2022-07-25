const express = require('express');
const router = express.Router();
const {validatorLogin,validatorRegister} = require('../validators/auth')
const {registerController, loginController} = require('../controllers/auth')



router.post("/register", validatorRegister, registerController)

router.post("/login", validatorLogin, loginController)







module.exports = router;