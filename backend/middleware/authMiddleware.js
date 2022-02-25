const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const protect = async(req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    // const userID = decodedToken.id;

    req.user = await User.findById(decodedToken.id).select('-password');
    next();
  }
  catch {
    res.status(500).json({message: 'bad request'});
    return res.end();
  }
}

module.exports = { protect }