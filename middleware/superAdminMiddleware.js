// middlewares/superAdminMiddleware.js
const jwt = require('jsonwebtoken');

const superAdminMiddleware = (req, res, next) => {
  const token = req.header('x-auth-token');
  if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Check if the user is Super Admin
    if (decoded.user.role !== 'superadmin') {
      return res.status(403).json({ msg: 'Access denied. Only Super Admin can perform this action.' });
    }

    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};

module.exports = superAdminMiddleware;
