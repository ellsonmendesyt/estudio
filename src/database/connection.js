const Sequelize = require('sequelize');

///abriar a contexao
const sequelize = new Sequelize('estudio', 'root', '', {host:'127.0.0.1', dialect:'mysql'});

module.exports=sequelize;
global.sequelize=sequelize;