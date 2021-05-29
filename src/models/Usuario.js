const Sequelize = require('sequelize');


module.exports= sequelize.define("Usuario", {
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
    }
})