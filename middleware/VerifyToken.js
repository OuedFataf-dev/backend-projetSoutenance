const jwt = require('jsonwebtoken');

const verifyAdmin = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) return res.status(401).json({ message: "Token manquant" });

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role !== 'admin') {
      return res.status(403).json({ message: "Accès refusé : admin uniquement" });
    }

    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Token invalide", error: err.message });
  }
};

module.exports = { verifyAdmin }; // <--- Important : bien exporter en tant qu'objet
