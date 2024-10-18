// controllers/superAdminController.js
const User = require('../models/User');
const Role = require('../models/Role');
const Content = require('../models/Content');

// Get all users (Super Admin only)
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().populate('role').populate('contentAccess');
    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Get all roles (Super Admin only)
exports.getAllRoles = async (req, res) => {
  try {
    const roles = await Role.find();
    res.json(roles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Get all content (Super Admin only)
exports.getAllContent = async (req, res) => {
  try {
    const content = await Content.find().populate('createdBy');
    res.json(content);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Assign a role to a user
exports.assignRole = async (req, res) => {
  const { email, roleId } = req.body;
  
  try {
    const user = await User.findById(email);
    if (!user) return res.status(404).json({ msg: 'User not found' });

    const role = await Role.findById(roleId);
    if (!role) return res.status(404).json({ msg: 'Role not found' });

    user.role = roleId;
    await user.save();

    res.json({ msg: 'Role assigned successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Assign content access to a user
exports.assignContentAccess = async (req, res) => {
  const { userId, contentId } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ msg: 'User not found' });

    const content = await Content.findById(contentId);
    if (!content) return res.status(404).json({ msg: 'Content not found' });

    user.contentAccess.push(contentId);
    await user.save();

    res.json({ msg: 'Content access granted successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
