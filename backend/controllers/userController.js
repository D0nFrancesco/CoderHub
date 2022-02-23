const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');

const registerUser = async(req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res.status(400);
      res.write('bad request :(');
      return res.end();
    }

    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(400);
      res.write('user already exists');
      return res.end();
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    // Create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    if (user) {
      return  res.status(201).json({
                message: 'successful',
                _id: user.id,
                name: user.name,
                email: user.email,
                token: generateToken(user._id),
              });
    } 
    else {
      res.status(400);
      res.write('Invalid user data');
      return res.end();
    }
  }
  catch (err) {
    res.status(500);
    res.write(err);
    return res.end();
  }
}

const loginUser = async(req, res) => {
  try {
    const { email, password } = req.body;
    // check if user exits
    const user = await User.findOne({ email });
    
    if (user && (await bcrypt.compare(password, user.password))) {
      return  res.json({
                message: 'successful',
                _id: user.id,
                name: user.name,
                email: user.email,
                token: generateToken(user._id),
              });
    }
    else {
      res.status(401);
      res.write('Invalid Credentials');
      return res.end();
      // throw new Error('Invalid Credentials');
    }
  }
  catch (err) {
    res.status(500);
    res.write(err);
    return res.end();
  }
}

const getUserData = async(req, res) => {
  let data = req.user;

  res.status(200);
  res.json({
    message: 'successful',
    _data: data
  });
  return res.end();
}
 
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: '30d',
    });
}

module.exports = {
    registerUser,
    loginUser,
    getUserData
}