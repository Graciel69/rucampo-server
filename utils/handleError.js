const handleHttpError = (res, message = 'algo ocurrio', code = 403) => {
    res.status(code)
    res.send({error: message})

}

module.exports = {handleHttpError}