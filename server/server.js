// //remove comments and use this code for sign up page and users data creating in mongodb
//  const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Connect to MongoDB
// mongoose.connect('mongodb+srv://sample_user:newpassword@cluster0.lepdb.mongodb.net/projectschool?retryWrites=true&w=majority&appName=Cluster0', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true, 
// }).then(() => {
//   console.log('Connected to MongoDB');
// }).catch(err => {
//   console.error('Error connecting to MongoDB:', err);
// });

// // Define User schema and model
// const userSchema = new mongoose.Schema({
//   username: { type: String, required: true, unique: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
// });

// const User = mongoose.model('User', userSchema);

// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Signup route
// app.post('/api/signup', async (req, res) => {
//   const { username, email, password } = req.body;

//   // Check if the user already exists
//   const existingUser = await User.findOne({ $or: [{ email }, { username }] });
//   if (existingUser) {
//     return res.status(400).json({ message: 'Username or Email already exists' });
//   }

//   // Hash the password
//   const hashedPassword = await bcrypt.hash(password, 10);

//   // Create new user and save to MongoDB
//   const newUser = new User({
//     username,
//     email,
//     password: hashedPassword, // Store the hashed password
//   });

//   try {
//     await newUser.save();
//     res.status(201).json({ message: 'User created successfully!' });
//   } catch (error) {
//     res.status(500).json({ message: 'Error creating user', error: error.message });
//   }
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server started on http://localhost:${PORT}`);
// });






// new one in accordance to login authentication



// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Connect to MongoDB
// mongoose.connect('mongodb+srv://sample_user:newpassword@cluster0.lepdb.mongodb.net/projectschool?retryWrites=true&w=majority&appName=Cluster0', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => {
//   console.log('Connected to MongoDB');
// }).catch(err => {
//   console.error('Error connecting to MongoDB:', err);
// });

// // Define User schema and model
// const userSchema = new mongoose.Schema({
//   username: { type: String, required: true, unique: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   images: { type: Array, default: [] }, // Array to store image paths or data later on
// });

// const User = mongoose.model('User', userSchema);

// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Signup route
// app.post('/api/signup', async (req, res) => {
//   const { username, email, password } = req.body;

//   // Check if the user already exists
//   const existingUser = await User.findOne({ $or: [{ email }, { username }] });
//   if (existingUser) {
//     return res.status(400).json({ message: 'Username or Email already exists' });
//   }

//   // Hash the password
//   const hashedPassword = await bcrypt.hash(password, 10);

//   // Create new user and save to MongoDB
//   const newUser = new User({
//     username,
//     email,
//     password: hashedPassword, // Store the hashed password
//     images: [], // Initialize empty images array for each user
//   });

//   try {
//     await newUser.save();
//     res.status(201).json({ message: 'User created successfully!' });
//   } catch (error) {
//     res.status(500).json({ message: 'Error creating user', error: error.message });
//   }
// });

// // Login route
// app.post('/api/login', async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     // Find user by username
//     const user = await User.findOne({ username });

//     if (!user) {
//       return res.status(400).json({ message: 'User doesn\'t exist' });
//     }

//     // Compare hashed password
//     const isPasswordMatch = await bcrypt.compare(password, user.password);
//     if (!isPasswordMatch) {
//       return res.status(400).json({ message: 'Username or password is wrong' });
//     }

//     // If login is successful, return the user data (excluding password)
//     res.status(200).json({
//       message: 'Login successful',
//       user: { username: user.username, images: user.images },
//     });
//   } catch (error) {
//     res.status(500).json({ message: 'Error during login', error: error.message });
//   }
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log('Server started on http://localhost:${PORT}');
// });

// new code for admin validation



// server.js
// server.js
// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Connect to MongoDB
// mongoose.connect('mongodb+srv://sample_user:newpassword@cluster0.lepdb.mongodb.net/projectschool?retryWrites=true&w=majority&appName=Cluster0', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => {
//   console.log('Connected to MongoDB');
// }).catch(err => {
//   console.error('Error connecting to MongoDB:', err);
// });

// // Define User schema and model
// const userSchema = new mongoose.Schema({
//   username: { type: String, required: true, unique: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   images: { type: Array, default: [] }, // Array to store image paths or data later on
// });

// const User = mongoose.model('User', userSchema);

// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Signup route
// app.post('/api/signup', async (req, res) => {
//   const { username, email, password } = req.body;

//   // Check if the user already exists
//   const existingUser = await User.findOne({ $or: [{ email }, { username }] });
//   if (existingUser) {
//     return res.status(400).json({ message: 'Username or Email already exists' });
//   }

//   // Hash the password
//   const hashedPassword = await bcrypt.hash(password, 10);

//   // Create new user and save to MongoDB
//   const newUser = new User({
//     username,
//     email,
//     password: hashedPassword, // Store the hashed password
//     images: [], // Initialize empty images array for each user
//   });

//   try {
//     await newUser.save();
//     res.status(201).json({ message: 'User created successfully!' });
//   } catch (error) {
//     res.status(500).json({ message: 'Error creating user', error: error.message });
//   }
// });

// // Login route
// app.post('/api/login', async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     // Check if the user is an admin by username ending with '@admin'
//     if (username.endsWith('@admin')) {
//       return res.status(200).json({ message: 'Admin login successful', isAdmin: true });
//     }

//     // Find user by username for non-admin login
//     const user = await User.findOne({ username });

//     if (!user) {
//       return res.status(400).json({ message: "User doesn't exist" });
//     }

//     // Compare hashed password
//     const isPasswordMatch = await bcrypt.compare(password, user.password);
//     if (!isPasswordMatch) {
//       return res.status(400).json({ message: 'Username or password is wrong' });
//     }

//     // If login is successful, return the user data (excluding password)
//     res.status(200).json({
//       message: 'Login successful',
//       user: { username: user.username, images: user.images },
//     });
//   } catch (error) {
//     res.status(500).json({ message: 'Error during login', error: error.message });
//   }
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server started on http://localhost:${PORT}`);
// });



// with admin authentication
//CORRECT CODEE WITHOUT IMAGES

// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Connect to MongoDB
// mongoose.connect('mongodb+srv://sample_user:newpassword@cluster0.lepdb.mongodb.net/projectschool?retryWrites=true&w=majority&appName=Cluster0', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => {
//   console.log('Connected to MongoDB');
// }).catch(err => {
//   console.error('Error connecting to MongoDB:', err);
// });

// // Define User schema and model
// const userSchema = new mongoose.Schema({
//   username: { type: String, required: true, unique: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   images: { type: Array, default: [] }, // Array to store image paths or data later on
// });

// const User = mongoose.model('User', userSchema);

// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Signup route
// app.post('/api/signup', async (req, res) => {
//   const { username, email, password } = req.body;

//   // Check if the user already exists
//   const existingUser = await User.findOne({ $or: [{ email }, { username }] });
//   if (existingUser) {
//     return res.status(400).json({ message: 'Username or Email already exists' });
//   }

//   // Hash the password
//   const hashedPassword = await bcrypt.hash(password, 10);

//   // Create new user and save to MongoDB
//   const newUser = new User({
//     username,
//     email,
//     password: hashedPassword, // Store the hashed password
//     images: [], // Initialize empty images array for each user
//   });

//   try {
//     await newUser.save();
//     res.status(201).json({ message: 'User created successfully!' });
//   } catch (error) {
//     res.status(500).json({ message: 'Error creating user', error: error.message });
//   }
// });

// // Login route
// app.post('/api/login', async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     // Check if the username ends with "@admin"
//     if (username.endsWith('@admin')) {
//       return res.status(200).json({
//         message: 'Admin login successful',
//         isAdmin: true,
//         user: { username, images: [] },
//       });
//     }

//     // Find user by username for non-admin users
//     const user = await User.findOne({ username });

//     if (!user) {
//       return res.status(400).json({ message: "User doesn't exist" });
//     }

//     // Compare hashed password for non-admin users
//     const isPasswordMatch = await bcrypt.compare(password, user.password);
//     if (!isPasswordMatch) {
//       return res.status(400).json({ message: 'Username or password is wrong' });
//     }

//     // If login is successful, return the user data (excluding password)
//     res.status(200).json({
//       message: 'Login successful',
//       isAdmin: false,
//       user: { username: user.username, images: user.images },
//     });
//   } catch (error) {
//     res.status(500).json({ message: 'Error during login', error: error.message });
//   }
// });
// app.get('/api/users', async (req, res) => {
//   try {
//       const users = await User.find(); // Assuming User is your Mongoose model
//       res.json(users);
//   } catch (error) {
//       res.status(500).json({ message: 'Error retrieving users' });
//   }
// });

// Start the server
// app.listen(PORT, () => {
//   console.log(`Server started on http://localhost:${PORT}`);
// });

//CORRECT CODE ENDS HERE

// new one



// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Connect to MongoDB
// mongoose.connect('mongodb+srv://sample_user:newpassword@cluster0.lepdb.mongodb.net/projectschool?retryWrites=true&w=majority&appName=Cluster0', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => {
//   console.log('Connected to MongoDB');
// })
// .catch(err => {
//   console.error('Error connecting to MongoDB:', err);
// });

// // Define User schema and model
// const userSchema = new mongoose.Schema({
//   username: { type: String, required: true, unique: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   images: { type: Array, default: [] }, // Array to store image paths or data later on
// });

// const User = mongoose.model('User', userSchema);

// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Signup route
// app.post('/api/signup', async (req, res) => {
//   const { username, email, password } = req.body;

//   const existingUser = await User.findOne({ $or: [{ email }, { username }] });
//   if (existingUser) {
//     return res.status(400).json({ message: 'Username or Email already exists' });
//   }

//   const hashedPassword = await bcrypt.hash(password, 10);

//   const newUser = new User({
//     username,
//     email,
//     password: hashedPassword,
//     images: [],
//   });

//   try {
//     await newUser.save();
//     res.status(201).json({ message: 'User created successfully!' });
//   } catch (error) {
//     res.status(500).json({ message: 'Error creating user', error: error.message });
//   }
// });

// // Login route
// app.post('/api/login', async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     if (username.endsWith('@admin')) {
//       return res.status(200).json({
//         message: 'Admin login successful',
//         isAdmin: true,
//         user: { username, images: [] },
//       });
//     }

//     const user = await User.findOne({ username });

//     if (!user) {
//       return res.status(400).json({ message: "User doesn't exist" });
//     }

//     const isPasswordMatch = await bcrypt.compare(password, user.password);
//     if (!isPasswordMatch) {
//       return res.status(400).json({ message: 'Username or password is wrong' });
//     }

//     res.status(200).json({
//       message: 'Login successful',
//       isAdmin: false,
//       user: { username: user.username, images: user.images },
//     });
//   } catch (error) {
//     res.status(500).json({ message: 'Error during login', error: error.message });
//   }
// });

// // Admin route to get all users
// app.get('/api/users', async (req, res) => {
//   const { username } = req.query; // Assume the admin's username is passed as a query parameter

//   // Check if the request comes from an admin user
//   if (!username || !username.endsWith('@admin')) {
//     return res.status(403).json({ message: 'Access denied. Admins only.' });
//   }

//   try {
//     const users = await User.find({}, { password: 0 }); // Exclude password from results
//     res.status(200).json(users);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching users', error: error.message });
//   }
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server started on http://localhost:${PORT}`);
// });


// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');
// const multer = require('multer');
// const path = require('path');

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Connect to MongoDB
// mongoose.connect('mongodb+srv://sample_user:newpassword@cluster0.lepdb.mongodb.net/projectschool?retryWrites=true&w=majority&appName=Cluster0', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => {
//   console.log('Connected to MongoDB');
// }).catch(err => {
//   console.error('Error connecting to MongoDB:', err);
// });

// // Define User schema and model
// const userSchema = new mongoose.Schema({
//   username: { type: String, required: true, unique: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   images: { type: Array, default: [] }, // Array to store image paths or data later on
// });

// const User = mongoose.model('User', userSchema);

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Set up storage for images
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/'); // Folder where images will be stored
//   },
//   filename: (req, file, cb) => {
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//     cb(null, uniqueSuffix + path.extname(file.originalname)); // File name
//   }
// });

// const upload = multer({ storage: storage });

// // Signup route
// app.post('/api/signup', async (req, res) => {
//   const { username, email, password } = req.body;

//   // Check if the user already exists
//   const existingUser = await User.findOne({ $or: [{ email }, { username }] });
//   if (existingUser) {
//     return res.status(400).json({ message: 'Username or Email already exists' });
//   }

//   // Hash the password
//   const hashedPassword = await bcrypt.hash(password, 10);

//   // Create new user and save to MongoDB
//   const newUser = new User({
//     username,
//     email,
//     password: hashedPassword, // Store the hashed password
//     images: [], // Initialize empty images array for each user
//   });

//   try {
//     await newUser.save();
//     res.status(201).json({ message: 'User created successfully!' });
//   } catch (error) {
//     res.status(500).json({ message: 'Error creating user', error: error.message });
//   }
// });

// // Login route
// app.post('/api/login', async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     // Check if the username ends with "@admin"
//     if (username.endsWith('@admin')) {
//       return res.status(200).json({
//         message: 'Admin login successful',
//         isAdmin: true,
//         user: { username, images: [] },
//       });
//     }

//     // Find user by username for non-admin users
//     const user = await User.findOne({ username });

//     if (!user) {
//       return res.status(400).json({ message: "User doesn't exist" });
//     }

//     // Compare hashed password for non-admin users
//     const isPasswordMatch = await bcrypt.compare(password, user.password);
//     if (!isPasswordMatch) {
//       return res.status(400).json({ message: 'Username or password is wrong' });
//     }

//     // If login is successful, return the user data (excluding password)
//     res.status(200).json({
//       message: 'Login successful',
//       isAdmin: false,
//       user: { username: user.username, images: user.images },
//     });
//   } catch (error) {
//     res.status(500).json({ message: 'Error during login', error: error.message });
//   }
// });

// // Route to handle image uploads
// app.post('/api/upload', upload.single('image'), async (req, res) => {
//   const { username } = req.body; // Get the username from the request body

//   if (!req.file) {
//     return res.status(400).json({ message: 'No file uploaded' });
//   }

//   const imagePath = req.file.path; // Get the path of the uploaded image

//   try {
//     // Find the user and update the images array
//     await User.findOneAndUpdate(
//       { username },
//       { $push: { images: imagePath } } // Push the new image path to the images array
//     );

//     res.status(200).json({ message: 'Image uploaded successfully', imagePath });
//   } catch (error) {
//     res.status(500).json({ message: 'Error uploading image', error: error.message });
//   }
// });

// // Get users route
// app.get('/api/users', async (req, res) => {
//   try {
//     const users = await User.find(); // Assuming User is your Mongoose model
//     res.json(users);
//   } catch (error) {
//     res.status(500).json({ message: 'Error retrieving users' });
//   }
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server started on http://localhost:${PORT}`);
// });





// not updating mongodb code ends above 


const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect('mongodb+srv://sample_user:newpassword@cluster0.lepdb.mongodb.net/projectschool?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB:', err);
});

// Define User schema and model
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  images: { type: Array, default: [] },
  uploadDate:{type :Date, default: Date.now},
  analysisResult: Object // Array to store image paths
});

const User = mongoose.model('User', userSchema);

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up storage for images
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Folder where images will be stored
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname)); // File name
  }
});

const upload = multer({ storage: storage });

// Signup route
app.post('/api/signup', async (req, res) => {
  const { username, email, password } = req.body;

  // Check if the user already exists
  const existingUser = await User.findOne({ $or: [{ email }, { username }] });
  if (existingUser) {
    return res.status(400).json({ message: 'Username or Email already exists' });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create new user and save to MongoDB
  const newUser = new User({
    username,
    email,
    password: hashedPassword, // Store the hashed password
  });

  try {
    await newUser.save();
    res.status(201).json({ message: 'User created successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error: error.message });
  }
});

// Login route
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if the username ends with "@admin"
    if (username.endsWith('@admin')) {
      return res.status(200).json({
        message: 'Admin login successful',
        isAdmin: true,
        user: { username, images: [] },
      });
    }

    // Find user by username for non-admin users
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(400).json({ message: "User doesn't exist" });
    }

    // Compare hashed password for non-admin users
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({ message: 'Username or password is wrong' });
    }

    // If login is successful, return the user data (excluding password)
    res.status(200).json({
      message: 'Login successful',
      isAdmin: false,
      user: { username: user.username, images: user.images },
    });
  } catch (error) {
    res.status(500).json({ message: 'Error during login', error: error.message });
  }
});

// Route to handle image uploads
// app.post('/api/upload', upload.single('image'), async (req, res) => {
//   const { username } = req.body; // Ensure username is being extracted from req.body

//   if (!req.file) {
//     return res.status(400).json({ message: 'No file uploaded' });
//   }

//   const imagePath = req.file.path; // Get the path of the uploaded image

//   try {
//     // Find the user and update the images array
//     const user = await User.findOneAndUpdate(
//       { username },
//       { $push: { images: imagePath } }, // Push the new image path to the images array
//       { new: true } // Optionally return the updated user
//     );

//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     res.status(200).json({ message: 'Image uploaded successfully', imagePath });
//   } catch (error) {
//     console.error('Error during image upload:', error); // Log error for debugging
//     res.status(500).json({ message: 'Error uploading image', error: error.message });
//   }
// });
app.post('/api/upload', upload.single('image'), async (req, res) => {
  // Ensure username is being extracted from req.body
  const { username } = req.body; 
  if (!username) {
    return res.status(400).json({ message: 'Username is required' });
  }

  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  const imagePath = req.file.path; // Get the path of the uploaded image

  try {
    // Find the user and update the images array
    const user = await User.findOneAndUpdate(
      { username },
      { $push: { images: imagePath } }, // Push the new image path to the images array
      { new: true } // Optionally return the updated user
    );

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'Image uploaded successfully', imagePath });
  } catch (error) {
    console.error('Error during image upload:', error); // Log error for debugging
    res.status(500).json({ message: 'Error uploading image', error: error.message });
  }
});

// Get users route
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find(); // Assuming User is your Mongoose model
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving users' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
