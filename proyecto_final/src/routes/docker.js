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

module.exports = router;
