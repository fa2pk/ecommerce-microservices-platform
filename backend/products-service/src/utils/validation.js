const Joi = require('joi');

const createProductValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(2).max(100).required(),
    description: Joi.string().min(10).max(1000).required(),
    price: Joi.number().min(0).required(),
    comparePrice: Joi.number().min(0).optional(),
    category: Joi.string().valid('electronics', 'clothing', 'books', 'home', 'sports', 'beauty', 'toys', 'other').required(),
    subcategory: Joi.string().max(50).optional().allow(''),
    brand: Joi.string().max(50).optional().allow(''),
    sku: Joi.string().max(50).optional().allow(''),
    stock: Joi.number().min(0).required(),
    isFeatured: Joi.boolean().optional(),
    tags: Joi.array().items(Joi.string()).optional(),
    specifications: Joi.array().items(
      Joi.object({
        key: Joi.string().required(),
        value: Joi.string().required()
      })
    ).optional(),
    images: Joi.array().items(
      Joi.object({
        url: Joi.string().uri().required(),
        alt: Joi.string().optional().allow('')
      })
    ).optional()
  });

  return schema.validate(data);
};

const updateProductValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(2).max(100).optional(),
    description: Joi.string().min(10).max(1000).optional(),
    price: Joi.number().min(0).optional(),
    comparePrice: Joi.number().min(0).optional(),
    category: Joi.string().valid('electronics', 'clothing', 'books', 'home', 'sports', 'beauty', 'toys', 'other').optional(),
    subcategory: Joi.string().max(50).optional().allow(''),
    brand: Joi.string().max(50).optional().allow(''),
    sku: Joi.string().max(50).optional().allow(''),
    stock: Joi.number().min(0).optional(),
    isActive: Joi.boolean().optional(),
    isFeatured: Joi.boolean().optional(),
    tags: Joi.array().items(Joi.string()).optional(),
    specifications: Joi.array().items(
      Joi.object({
        key: Joi.string().required(),
        value: Joi.string().required()
      })
    ).optional(),
    images: Joi.array().items(
      Joi.object({
        url: Joi.string().uri().required(),
        alt: Joi.string().optional().allow('')
      })
    ).optional()
  });

  return schema.validate(data);
};

const productQueryValidation = (data) => {
  const schema = Joi.object({
    page: Joi.number().min(1).optional(),
    limit: Joi.number().min(1).max(100).optional(),
    category: Joi.string().optional(),
    search: Joi.string().optional(),
    minPrice: Joi.number().min(0).optional(),
    maxPrice: Joi.number().min(0).optional(),
    sortBy: Joi.string().valid('name', 'price', 'createdAt', 'rating').optional(),
    sortOrder: Joi.string().valid('asc', 'desc').optional(),
    featured: Joi.boolean().optional()
  });

  return schema.validate(data);
};

module.exports = {
  createProductValidation,
  updateProductValidation,
  productQueryValidation
};
