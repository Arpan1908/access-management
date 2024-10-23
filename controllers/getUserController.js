const User = require('../models/User');

const {
    Content,
    Workshop,
    Award,
    Competition,
    Conference,
    Consultancy,
    FDP,
    Hackathon,
    IndustrialTour
  } = require('../models/Content');

// Get user permissions (for logged-in user)
exports.getUserPermissions = async (req, res) => {
  const userId = req.user.id;

  try {
    const user = await User.findById(userId).populate('role'); // Assuming roles are populated
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    // Assuming you store permissions or roles in the user object
    res.json({
      msg: 'User permissions retrieved successfully',
      permissions: user.role,
      department:user.department,
      email:user.email, // Send roles/permissions
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Get documents for users in the same department
exports.getDocumentsByDepartment = async (req, res) => {
  const userId = req.user.id;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    const userDepartment = user.department; // Assuming `department` field exists in user


    // Fetch documents of users who are in the same department
    const documents = await Workshop.find({ department: userDepartment })

    res.json({
      msg: 'Documents retrieved successfully',
      documents,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
