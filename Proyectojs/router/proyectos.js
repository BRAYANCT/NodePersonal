var express=require('express');
var ProyectosController=require('../controllers/proyectos');

var router=express.Router();

var multipart=require('connect-multiparty');
const { getImagenFile } = require('../controllers/proyectos');
var multipartMiddleware=multipart({uploadDir:'./upload'})

router.get('/home',ProyectosController.home);
router.post('/test',ProyectosController.test);
router.post('/saveProyecto',ProyectosController.saveProyectos);
router.get('/proyecto/:id?',ProyectosController.getProyecto);
router.get('/proyectos',ProyectosController.getProyectos);
router.put('/proyectos/:id',ProyectosController.updateProyectos);
router.delete('/proyectos/:id',ProyectosController.deleteProyectos);
router.post('/imagen/:id',multipartMiddleware, ProyectosController.subirImagen);

router.get('/get-imagen/:imagen',ProyectosController.getImagenFile);


module.exports=router;