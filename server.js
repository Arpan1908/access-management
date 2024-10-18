const express = require('express');
const app = express();
const helmet = require('helmet');
const morgan = require('morgan');
const connectDB = require('./config/db');
require('dotenv').config();
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const superAdminRoutes = require('./routes/superAdminRoutes');
const User = require('./models/User');
const bcrypt = require('bcrypt');


// const createSuperAdmin = async () => {
//     try {
//       const superAdminEmail = process.env.SUPER_ADMIN_EMAIL || 'superadmin@example.com';
  
//       // Check if Super Admin already exists
//       let superAdmin = await User.findOne({ email: superAdminEmail });
      
//       if (!superAdmin) {
//         // If not, create Super Admin
//         const hashedPassword = await bcrypt.hash(process.env.SUPER_ADMIN_PASSWORD || 'superadminpassword', 10);
  
//         superAdmin = new User({
//           email: 'arpantio15@gmail.com',
//           contact: "1234567890",
//           department: "Admin Department",
//           college: "Admin College",
//           password: hashedPassword,
//           role: "superadmin",
//           contentAccess: []
//         });
  
//         await superAdmin.save();
//         console.log('Super Admin created successfully');
//       } else {
//         console.log('Super Admin already exists');
//       }
//     } catch (error) {
//       console.error('Error creating Super Admin:', error);
//     }
//   };
  
//   // Call the function to check and create Super Admin
//   createSuperAdmin();

connectDB();
app.use(express.json());
app.use(helmet());
app.use(cors()); 
app.use(morgan('combined')); 



app.use('/api/auth', authRoutes);
app.use('/api/superadmin', superAdminRoutes);

app.listen(8000,()=>{
    console.log("server is running on port 8000");
})