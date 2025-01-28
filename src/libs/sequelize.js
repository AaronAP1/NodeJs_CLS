const { Sequelize } = require('sequelize');

const  { config } = require('../config/config');
const setupModels = require('../model');
  
const sequelize = new Sequelize(
    config.dbName, 
    config.dbUser,
    config.dbPassword, 
    {
      host: config.dbHost,
      dialect: 'mysql',
      logging: false
    }
  );

sequelize.sync();
setupModels(sequelize);

module.exports = sequelize;