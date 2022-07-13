const checkAdmin = (req, resp, next) => {
    const admin = true
    if (admin) {
        next()
    } else {

        resp.status(401).json({
            erro: 'No es usuario administrador'
        })
    }
}

module.exports = {checkAdmin}