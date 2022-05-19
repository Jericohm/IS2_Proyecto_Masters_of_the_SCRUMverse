var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/jerico', function(req, res, next) {
  res.render('equipo/PaginaDJHM/jerico',{style:'styleJerico.css', img:'DJHM.jpg'});
});

router.get('/alan', function(req, res, next) {
  res.render('equipo/PaginaAGM/Alan',{style:'styleAlan.css', img:'AGM.jpg'});
});

router.get('/dana', function(req, res, next) {
  res.render('equipo/PaginaDIFH/DanaItzelFonsecaHernandez',{style:'styleDana.css', img:'difh.jpg'});
});

router.get('/fernando', function(req, res, next) {
  res.render('equipo/PaginaFMH/fernan',{style:'styleFernan.css', img:'FMH.jpg'});
});

router.get('/hassel', function(req, res, next) {
  res.render('equipo/PaginaHJP/hassel',{style:'styleHassel.css', img:'HJP.jpg'});
});

router.get('/javier', function(req, res, next) {
  res.render('equipo/PaginaJACR/javier',{style:'styleJavier.css', img:'profile.jpeg', img2:'banner.png'});
});

router.get('/jose', function(req, res, next) {
  res.render('equipo/PaginaJMRR/jose',{style:'styleJose.css'});
});

router.get('/luis', function(req, res, next) {
  res.render('equipo/PaginaLMVO/index');
});

router.get('/maria', function(req, res, next) {
  res.render('equipo/PaginaMTJS/index');
});

module.exports = router;
