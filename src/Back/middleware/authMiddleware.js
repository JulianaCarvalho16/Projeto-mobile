const admin = require('../config/firebase');

async function verificarToken(req, res, next) {
    const token = req.headers.authorization?.split('Bearer ')[1];

    if (!token) return res.status(401).json({error: 'Token não encontrado'});

    try {
        const decoded = await admin.auth().verifyIdToken(token);
        req.uid = decoded.uid;
        next();
    } catch {
        res.status(401).json({error: 'Token invalido'});
    }
}

module.exports = verificarToken;