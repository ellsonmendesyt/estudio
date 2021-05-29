 module.exports= async ()=>{
     const Tweet = require('./models/Tweet');
     const Usuario = require('./models/Usuario');


     Usuario.hasMany(Tweet,{as: "Tweets", foreignKey:'usuarioId'});
     Tweet.belongsTo(Usuario, {as:"Usuario", foreignKey:'usuarioId'})
     ///criar as relações



    ///gerenciador de erro
    const handleError=(erro)=>{
        console.error(erro);
    }





     ////cria um usuario
     try{
         const usuario = await Usuario.create({nome:"Elson", senha:"123456"});
         const tweet = await Tweet.create({content:'Esse codigo tá brabo hein', usuarioId: usuario.get(id)}); ///user.id 
     }catch(erro){
         console.error(handleError);   
     }


     const usuarios = await Usuario.findAll({where:{nome:"Elson"}, include:[{model:Tweet, as:"Tweets"}]}).catch(handleError)
     console.log(usuarios)
 }