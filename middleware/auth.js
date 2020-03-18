const jwt = require('jsonwebtoken')
const config = require('config')

const auth = async (req, res, next) => {
    try {
        const token = req.header('x-auth-token')
        if (!token) { return res.status(500).json({ error: 'Missing Token' }) }

        const decoded = await jwt.verify(token, config.get('jwtPrivateKey'))
        req.user = decoded

        next()
    } catch (error) {
        res.status(403).json({ error: 'Invalid Token' })
    }
}

module.exports = auth