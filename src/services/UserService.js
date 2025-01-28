const { createUserSchema, updateUserSchema } = require('../controllers/UserValidation');
const { models } = require('../libs/sequelize');

class UserService {
  async find() {
    const res = await models.Person.findAll();
    return res;
  }

  async findOne(id) {
    const res = await models.Person.findByPk(id);
    return res;
  }

  async create(data) {
    const { error } = createUserSchema.validate(data);
    if (error) {
      throw new Error(`[ERROR] FALLO EN CREATE: ${error.details[0].message}`);
    }
    const res = await models.Person.create(data);
    return res;
  }

  async update(id, data) {
    const { error } = updateUserSchema.validate(data);
    if (error) {
      throw new Error(`[ERROR] FALLO EN UPDATE: ${error.details[0].message}`);
    }
    const model = await this.findOne(id);
    const res = await model.update(data);
    return res;
  }

  async delete(id) {
    const model = await this.findOne(id);
    await model.destroy();
    return { deleted: true };
  }
}

module.exports = UserService;