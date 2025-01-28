const { Person, PersonSchema } = require('./UserModel');

function setupModels(sequelize) {
    Person.init(PersonSchema, Person.config(sequelize));
}

module.exports = setupModels;