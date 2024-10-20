const express = require('express');
const app = express();
const helmet = require('helmet');
const morgan = require('morgan');
const connectDB = require('./config/db');
require('dotenv').config();
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const superAdminRoutes = require('./routes/superAdminRoutes');
const contentRoutes  = require('./routes/contentRoutes')
const User = require('./models/User');
const Content = require('./models/Content')
const bcrypt = require('bcrypt');


connectDB();
app.use(express.json());
app.use(helmet());
app.use(cors()); 
app.use(morgan('combined')); 



app.use('/api/auth', authRoutes);
app.use('/api/superadmin', superAdminRoutes);
app.use('/api',contentRoutes)

app.listen(8000,()=>{
    console.log("server is running on port 8000");
})

//http://localhost:8000/api/access/22c0eaf8-9439-429b-84d9-0794ce6d9340/view