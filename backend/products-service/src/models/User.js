const mongoose = require('mongoose');

// Упрощенная схема User только для reference
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

// Это позволяет ссылаться на пользователей из Auth Service без полной схемы
module.exports = mongoose.model('User', userSchema);
