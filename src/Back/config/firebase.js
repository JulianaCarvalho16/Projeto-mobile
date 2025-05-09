const admin = require('firebase-admin');
const serviceAccount = ('./serviceAccountKey.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

module.exports = admin