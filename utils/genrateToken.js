const jwt = require('jsonwebtoken')
const config = require('config')


const generateToken = async (user) => {
    try {
        const token = jwt.sign({ _id: user._id, name: user.name, isAdmin: user.isAdmin }, config.get('jwtPrivateKey'))
        return token
    } catch (error) {
        return error
    }
}


module.exports = generateToken