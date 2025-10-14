const { verifyToken } = require('../utils/auth');

const authenticate = async (req, res, next) => {
  try {
    let token;

    // Check for token in headers
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Access denied. No token provided.'
      });
    }

    console.log('Verifying token with Auth Service...');
    
    // Verify token with Auth Service
    const authResult = await verifyToken(token);
    
    if (!authResult.success) {
      console.log('Authentication failed:', authResult.message);
      return res.status(401).json({
        success: false,
        message: authResult.message
      });
    }

    console.log('User authenticated:', authResult.user);
    
    // Add user to request object
    req.user = authResult.user;
    next();
  } catch (error) {
    console.error('Authentication error:', error);
    return res.status(401).json({
      success: false,
      message: 'Authentication failed.'
    });
  }
};

const authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: 'Access denied. Insufficient permissions.'
      });
    }
    next();
  };
};

module.exports = {
  authenticate,
  authorize
};
