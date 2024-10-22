const User = require('../models/User');
const Content = require('../models/Content');

// Check if the user has access to the content
exports.checkContentAccess = async (req, res) => {
  try {
    const { contentId, permission } = req.params;
    const userId = req.user.id;  // User is now attached to req.user by the middleware

    // Ensure the user has access to the specific content
    const contentAccess = req.user.contentAccess.find(
      access => access.contentId.toString() === contentId);

    console.log('Permissions for Content:', contentAccess.permissions);


    if (!contentAccess) {
      return res.status(403).json({ msg: 'Access denied: No access to this content' });
    }

    // Check if the user has the required permission (view or edit)
    if (!contentAccess.permissions || !contentAccess.permissions.includes(permission)) {
      return res.status(403).json({ msg: `Access denied: You do not have ${permission} permission for this content` });
    }

    // Fetch the content if the user has permission
    const content = await Content.findOne({contentId});
    console.log(content)
    if (!content) {
      return res.status(404).json({ msg: 'Content not found' });
    }

    // Return the content data if the user has the correct permission
    res.json({
      msg: `You have ${permission} permission for this content`,
      content
    });

  } catch (error) {
    console.error('Error checking content access:', error);
    res.status(500).json({ msg: 'Server error' });
  }
};




// Function to get content accessible by the users in the same department
exports.getDepartmentContent = async (req, res) => {
  try {
    // Get the current user's department from the JWT token or session (assuming req.user is populated via middleware)
    const currentUser = await User.findById(req.user.id);
    const department = currentUser.department;

    // Find all users in the same department
    const departmentUsers = await User.find({ department }).select('_id');

    // Get the documents accessible by all users in the department
    const departmentUserIds = departmentUsers.map(user => user._id);
    
    // Find content assigned to any user in the department
    const accessibleContent = await Content.find({ assignedTo: { $in: departmentUserIds } });

    res.json({ department, accessibleContent });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};




exports.editData = async(req,res)=>{
  try {
    const { contentId, data } = req.body;
    const userId = req.user.id;  // User is now attached to req.user by the middleware
  } catch (err) {}

}
