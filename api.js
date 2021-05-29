 
const Express = require('express');
const app = Express();
app.use(Express.json())
require('./src/database/connection');
require('./src/bootstrap')();





app.listen(5000, ()=>{
    console.log('Servidor ok');
})