/*
In order to add the same configuration to block our pages
we write a function that indicates all we need that JWT works well
then we just export the funtion and import it in any place of our app

*/

require('dotenv').config();
const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY;

function verifyToken(req, res, next) {
    const token = req.headers['x-access-token']
    if(!token) {
        return res.status(401).json({
            auth: false,
            message: 'No Token provided'
        });
    }
    const decoded = jwt.verify(token, SECRET_KEY )
    req.userId = decoded.id;
    // req.userId guarda datos adicionales en peticiones req
    next();
}

module.exports = verifyToken;