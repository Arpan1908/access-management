// const jwt = require('jsonwebtoken');


// const JWT_SECRET = process.env.JWT_SECRET; 


// const authMiddleware = (req, res, next) => {
//   const authHeader = req.headers.authorization;


//   if (!authHeader || !authHeader.startsWith('Bearer ')) {
//     return res.status(401).json({ message: 'Authorization token missing or malformed' });
//   }


//   const token = authHeader.split(' ')[1];

 
//   jwt.verify(token, JWT_SECRET, (err, decoded) => {
//     if (err) {
//       return res.status(401).json({ message: 'Invalid or expired token' });
//     }

   
//     req.user = decoded;

 
//     next();
//   });
// };






// module.exports = authMiddleware;


const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Middleware to verify JWT and set req.user
const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];  // Expecting "Bearer <token>"

  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);  // Verify token
    const userid = decoded.user.id
    const user = await User.findById(userid);  // Find user by ID from token


    console.log(decoded)
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    req.user = user;  // Attach user to the request object
    next();
  } catch (err) {
    console.error('Error verifying token:', err);
    return res.status(401).json({ msg: 'Token is not valid' });
  }
};

module.exports = authMiddleware;
