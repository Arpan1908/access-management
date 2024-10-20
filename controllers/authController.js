// controllers/authController.js
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Super Admin login
exports.superAdminLogin = async (req, res) => {
  const { email, password } = req.body;
  
  try {
    // Find the Super Admin by email
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: 'Invalid credentials' });

    // Check if the user is the Super Admin
    if (user.role !== 'superadmin') {
      return res.status(403).json({ msg: 'Access denied. Only Super Admin can log in here.' });
    }

    // Check if the password matches
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

    // Create JWT token
    const payload = {
      user: {
        id: user.id,
        role: user.role
      }
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ token, msg: 'Login successful' });

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Find the user by email
      const user = await User.findOne({ email });
      if (!user) return res.status(404).json({ msg: 'User not found' });
  
      // Check if the password matches
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });
  
      // Generate a JWT token
      const payload = {
        user: {
          id: user.id,
          role: user.role
        }
      };
  
      const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
  
      res.json({ token, msg: 'Login successful' });
  
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  };


