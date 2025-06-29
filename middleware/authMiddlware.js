module.exports = (req, res, next) => {
    // Exemple de vérification basique
    if (req.user) {
      next();
    } else {
      res.status(401).json({ message: 'Non authentifié' });
    }
  };
  

  const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  const token = req.headers['authorization']?.split(' ')[1]; // format "Bearer token"

  if (!token) {
    return res.status(403).json({ message: 'Token manquant' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // ajout des infos user dans la requête
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Token invalide' });
  }
};




