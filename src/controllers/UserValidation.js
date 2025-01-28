const Joi = require('joi');

const createUserSchema = Joi.object({
  nombre: Joi.string().min(3).max(30).required(),
  correo: Joi.string().email().required(),
  edad: Joi.number().integer().min(0).optional()
});

const updateUserSchema = Joi.object({
  nombre: Joi.string().min(3).max(30),
  correo: Joi.string().email(),
  edad: Joi.number().integer().min(0).optional()
});

module.exports = {
  createUserSchema,
  updateUserSchema
};