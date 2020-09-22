var Proyectos=require('../models/proyectos');
var fs=require('fs');
var path =require ('path');
const { param } = require('../router/proyectos');
const proyectos = require('../models/proyectos');
const { exists } = require('../models/proyectos');

var controller={
    home:function (req,res) {  
        return res.status(200).send({
            message:'Soy la Home'
        })
    },
    test:function (req,res) { 
        return res.status(200).send({
            message:'Soy un meodo o accion test'
        })
     },   
     saveProyectos:function (req,res) {

        var proyectos=new Proyectos();

        var params=req.body;
        proyectos.nombre=params.nombre;
        proyectos.descripcion=params.descripcion;
        proyectos.categoria=params.categoria;
        proyectos.lenguajes=params.lenguajes;
        proyectos.anio=params.anio;
        proyectos.imagen=null;
        proyectos.save((err,proyectosStored)=>{
            if(err)return res.status(500).send({message:'Error al guardar'});
            if(!proyectosStored) return res.status(404).send({message:'no se guardo el proyecto'});
            return res.status(200).send({proyectos:proyectosStored});
        });    


     },
     getProyecto:function (req,res) {
         var proyectosId=req.params.id;

         if (proyectosId==null)return res.status(404).send({message:'el proyecto no existe'});
         
         Proyectos.findById(proyectosId,(err,proyectos)=>{

             if (err) return res.status(500).send({message:'error al devolver los datos'});

             if (!proyectos) return res.status(404).send({message:'el proyecto no en la bse existe'});    
                 
             return res.status(200).send({

                 proyectos

                });
         });
     },
     getProyectos:function (req,res) {

        var proyectosId=req.params.id;
        Proyectos.find({}).sort('+anio').exec((err,proyectos)=>{

            if (err) return res.status(500).send({message:'Error al cargar datos'});

            if (!proyectos) return res.status(404).send({message:'el proyecto no en la bse existe'});    
         
            return res.status(200).send({

                proyectos

               });
        });

     },
     updateProyectos:function(req,res){
         var proyectosId=req.params.id;
            var update=req.body;
            Proyectos.findByIdAndUpdate(proyectosId,update,{new:true},(err,proyectosUpdate)=>{

                if (err) return res.status(500).send({message:'no se pudo actualizar'});

                if (!proyectosUpdate) return res.status(404).send({message:'el proyecto no en la base no existe'});
                return res.status(200).send({proyectos:proyectosUpdate});
            })
         
     },
     deleteProyectos:function(req,res){

         var proyectosId=req.params.id;

         Proyectos.findByIdAndRemove(proyectosId,(err,proyectosremove)=>{

            if (err) return res.status(500).send({message:'no se pudo borrar el documento'});

            if (!proyectosremove) return res.status(404).send({message:'el proyecto no en la base no existe'});

            return res.status(200).send({proyectos:proyectosremove});

         })
 
     },
     subirImagen:function (req,res) {

        var proyectosId=req.params.id;
        var fileName='Imagen no subido...';
        

        if(req.files){

          var filePath=req.files.imagen.path;
          var fileSplit=filePath.split('/');
          var fileName=fileSplit[1];
          var extSplit=fileName.split('\.');
          var fileExt=extSplit[1];
          if(fileExt=='png'|| fileExt=='jpg' || fileExt=='jpge'|| fileExt=='gif'){

            Proyectos.findByIdAndUpdate(proyectosId,{imagen:fileName},{new:true},(err,proyectosUpdate)=>{

                if (err) return res.status(500).send({message:'la imagen no se subio'});
                if (!proyectosUpdate) return res.status(404).send({message:'el proyecto no existe'});
    
                return res.status(200).send({ 
                    proyectos:proyectosUpdate
    
                });
              })
          }     else{
              fs.unlink(filePath,(err)=>{
                  return res.status(200).send({message:'La extencion no es valida'});
              });
          }
          

        }else{

            return res.status(200).send({ 
                files:fileName

            });
        }
    },
    getImagenFile:function (req,res) {  
        
        var file=req.param.imagen;
        var path='./uploads/'+file;
        fs.exists(path,(exists)=>{
            if(exists){
                return res.sendFile(path.resolve(path.file));
            }else{
                return res.status(200).send({
                    message:"No existe la Imagen..."
                });
            }
        });
    }



};
module.exports=controller;