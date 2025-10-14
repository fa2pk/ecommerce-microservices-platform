const axios = require('axios');

const verifyToken = async (token) => {
  try {
    const response = await axios.get(`${process.env.AUTH_SERVICE_URL}/api/auth/profile`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    
    if (response.data.success && response.data.data.user) {
      return {
        success: true,
        user: response.data.data.user
      };
    } else {
      return {
        success: false,
        message: 'Invalid user data'
      };
    }
  } catch (error) {
    console.error('Auth service error:', error.response?.data || error.message);
    return {
      success: false,
      message: error.response?.data?.message || 'Authentication failed'
    };
  }
};

module.exports = {
  verifyToken
};
