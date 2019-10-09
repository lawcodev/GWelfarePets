const jwt = require('jsonwebtoken');
const config = require('./config');


function verifyAdmi(req, res, next) {
  console.log(req.role);
  // var currentUserRole = req.role
  const decoded = jwt.verify(token, config.secret);
  console.log(decoded)  
  req.role = decoded.role;
  if (config.administrator == req.role ) {
    next();
  } else{
    next(new Error("Permission denied."));
    return;
  }  
};
module.exports = verifyAdmi;