const { Model, DataTypes, Sequelize } = require('sequelize');

const PERSON_TABLE = 'users';

class Person extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: PERSON_TABLE,
            modelName: 'Person',
            timestamps: true
        }
    }
} 

const PersonSchema = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      correo: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      edad: {
        type: DataTypes.INTEGER,
      }   
}
  
module.exports = { Person, PersonSchema };