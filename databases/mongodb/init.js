db = db.getSiblingDB('ecommerce');

// Создаем коллекции
db.createCollection('users');
db.createCollection('products');
db.createCollection('categories');

// Создаем индексы
db.users.createIndex({ "email": 1 }, { unique: true });
db.products.createIndex({ "category": 1 });
db.products.createIndex({ "name": "text", "description": "text" });

print("MongoDB initialization completed");
