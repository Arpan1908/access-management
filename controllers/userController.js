const User = require('../models/User');
const Role = require('../models/Role');
const bcrypt = require('bcryptjs');
const transporter = require('../config/mailer'); // Import mailer module

// Function to add a user with a role
exports.addUser = async (req, res) => {
  try {
    const { email, contact, department, college, role, contentAccess } = req.body;
    const temporaryPassword = Math.random().toString(36).slice(-8);

    const hashedPassword = await bcrypt.hash(temporaryPassword, 10);
    const user = new User({
      email,
      contact,
      department,
      college,
      password: hashedPassword,
      role,
      contentAccess
    });

    await user.save();

    // Set up mail options using the imported mailer
    const mailOptions = {
      from: process.env.MY_GMAIL,
      to: user.email,
      subject: 'Temporary Password and Role Assignment',
      text: `Dear user,\n\nYou have been assigned the role of ${role}.\nYour temporary password is: ${temporaryPassword}\n\nPlease log in and change your password immediately.\n\nThank you.`
    };

    // Send email using the transporter
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err);
        return res.status(500).send('Error sending email');
      }
      res.status(201).send('User added and email sent');
    });

  } catch (error) {
    console.log(error);
    res.status(500).send('Error adding user');
  }
};


exports.changePassword = async (req, res) => {
    const { email, oldPassword, newPassword } = req.body;
  
    try {
      // Find the user by email
      const user = await User.findOne({ email });
      if (!user) return res.status(404).json({ msg: 'User not found' });
  
      // Check if old password matches
      const isMatch = await bcrypt.compare(oldPassword, user.password);
      if (!isMatch) return res.status(400).json({ msg: 'Invalid old password' });
  
      // Hash the new password
      const hashedPassword = await bcrypt.hash(newPassword, 10);
  
      // Update the password with the new hashed password
      user.password = hashedPassword;
      await user.save();
  
      res.json({ msg: 'Password changed successfully' });
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server error');
    }
  };



  