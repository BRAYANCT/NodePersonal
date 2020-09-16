var mongoose=require('mongoose');
var Schema=mongoose.Schema;


var ProyectosSchema=new Schema({
    nombre:String,
    descripcion:String,
    categoria:String,
    lenguajes:String,
    anio:Number,
    imagen:String,
});
module.exports=mongoose.model('proyectos',ProyectosSchema)