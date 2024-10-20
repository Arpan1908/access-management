const User = require('../models/User');
const Content = require('../models/Content');


// Check if the user has access to the content
exports.checkContentAccess = async (req, res) => {
  try {
    const { contentId, permission } = req.params;
    const userId = req.user._id; 

    // Find the user
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

   
    const contentAccess = user.contentAccess.find(access => access.contentId.toString() === contentId);

    if (!contentAccess) {
      return res.status(403).json({ msg: 'Access denied: No access to this content' });
    }

    // Check if the user has the required permission (view or edit)
    if (!contentAccess.permissions || !contentAccess.permissions.includes(permission)) {
      return res.status(403).json({ msg: `Access denied: You do not have ${permission} permission for this content` });
    }

    // Fetch the content if the user has permission
    const content = await Content.findById(contentId);
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


