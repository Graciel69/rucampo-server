const {check, validationResult} = require('express-validator')



const validatorRegister = [
    check("name").exists().notEmpty().isLength({min: 3, max: 99}),
    check("age").exists().notEmpty().isNumeric(),
    check("password").exists().notEmpty().isLength({min: 3, max: 15}),
    check("email").exists().notEmpty().isEmail(),
    (req,res,next) => {
        try {

            validationResult(req).throw()
            return next()
            
        } catch (err) {
            res.status(403)
            res.send({ errors: err.array() })
            
        }
    }
]

const validatorLogin = [
    check("password").exists().notEmpty().isLength({min: 3, max: 15}),
    check("email").exists().notEmpty().isEmail(),
    (req,res,next) => {
        try {

            validationResult(req).throw()
            return next()
            
        } catch (err) {
            res.status(403)
            res.send({ errors: err.array() })
            
        }
    }
]



module.exports = { validatorRegister, validatorLogin};