'use strict';
const Sequelize = require('sequelize')

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.createTable('usuarios', {
    id:{
      type:Sequelize.INTEGER(11),
      allowNull:false,
      autoIncrement:true,
      primaryKey:true,
  },
  nome_usuario:{
      type:Sequelize.STRING(35),
      allowNull:false,
  },
  senha: {
      type:Sequelize.STRING(20),
      allowNull:false,
  },
  createdAt: Sequelize.DATE,
  updatedat: Sequelize.DATE
   })
  },

  down: async (queryInterface, Sequelize) => {
     queryInterface.dropTable('usuarios')
  }
};
