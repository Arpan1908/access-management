const Role = require('../models/Role');

exports.addRole = async (req, res) => {
  const { roleName, permissions } = req.body;
  const role = new Role({ roleName, permissions });
  try {
    await role.save();
    res.status(201).json({ message: 'Role added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error adding role' });
  }
};
