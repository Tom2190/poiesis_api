import jwt from 'jsonwebtoken';

const secretKey = "CLAVE_SECRETA";

function verifyToken(req, res, next) {
    const token = req.header('x-access-token')
    if (token===undefined) {
        return res.status(401).send('No se envio el Token.')
    }
    const decoded = jwt.verify(token, secretKey);
    req.userId = decoded.id;
    next()
}

function getToken(userData) {
    return jwt.sign(userData, secretKey)
}

export { verifyToken, getToken }