const {handleHttpError} = require('../utils/handleError');


const checkRole = (role) => (req, res, next) => {

    try {

        const {user} = req;

        console.log({user})

        const roleByUser = user.role;

        const checkValueRole = role.some( (roleSingle) => roleByUser.includes(roleSingle) )

        if(!checkValueRole){
            handleHttpError(res, "USER_NOT_PERMISSIONS", 403)
            return
        }
  
        next()
        
    } catch (error) {

        handleHttpError(res, "ERROR_PERMISSIONS", 403)
        return
    }

}

module.exports = checkRole