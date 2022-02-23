const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const protect = async(req, res) => {
  try {
    if (req.header.authorization && req.headers.authorization.startswith('Bearer')) {
      let token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select('-password');
      next();
    }
    else {
      res.status(401).json({message: 'unauthorized'});
      return res.end();
    }
  }
  catch (err) {
    res.status(500).write(err);
    return res.end();
  }
}

module.exports = { protect }