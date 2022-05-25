var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/intro', function(req, res, next) {
  res.render('docker/PaginaIntro/Intro',{style:'styleIntro.css'});
});

router.get('/imagenes', function(req, res, next) {
  res.render('docker/PaginaImagenes/Imagenes',{img:'imagenes.png'});
});

router.get('/directivas', function(req, res, next) {
  res.render('docker/PaginaDirectivas/Directivas',{img:'imagenes.png'});
});

router.get('/ciclodevida', function(req, res, next) {
  res.render('docker/PaginaCiclosDeVida/CiclosDeVida',{img:'contenedores.jpg'});
});

router.get('/contenedores', function(req, res, next) {
  res.render('docker/PaginaContenedores/Contenedores',{img:'cont.jpg', img2:'cont2.jpg'});
});

router.get('/archivo', function(req, res, next) {
  res.render('docker/PaginaArchivo/Archivo',{img:'image1.png'});
});

module.exports = router;
