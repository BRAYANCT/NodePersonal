var express=require('express');
var ProyectosController=require('../controllers/proyectos');

var router=express.Router();

var multipart=require('connect-multiparty');
var multipartMiddleware=multipart({uploadDir:'./upload'})

router.get('/home',ProyectosController.home);
router.post('/test',ProyectosController.test);
router.post('/saveProyecto',ProyectosController.saveProyectos);
router.get('/proyecto/:id?',ProyectosController.getProyecto);
router.get('/proyectos',ProyectosController.getProyectos);
router.put('/proyectos/:id',ProyectosController.updateProyectos);
router.delete('/proyectos/:id',ProyectosController.deleteProyectos);
router.post('/imagen/:id',multipartMiddleware, ProyectosController.subirImagen);


module.exports=router;