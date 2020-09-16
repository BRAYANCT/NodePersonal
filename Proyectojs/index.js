var mongoose=require('mongoose');


var pp=require('./app');
const app = require('./app');
var port=3700;


mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/portafolio')
                .then(() => {
                    console.log('Se conecto a la base de datos Mongodb');
                    //crear servidor
                    app.listen(port,()=>{
                        console.log('servidor corriendo correctamente en el puerto 3700');
                    })
                })
                .catch(err=>{
                    console.log(err);
                });