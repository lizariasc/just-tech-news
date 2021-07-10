// import the Sequelize constructor from the library
const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to our db
const sequelize = new Sequelize('just_tech_news_db', 'root', 'Arias.14', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });
  
  module.exports = sequelize;
  