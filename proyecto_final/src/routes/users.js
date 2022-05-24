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
  res.render('equipo/PaginaJACR/javier',{style:'styleJavier.css', img:'JACR.jpg'});
});

router.get('/maria', function(req, res, next) {
  res.render('equipo/PaginaMTJS/maria',{style:'styleTere.css', img:'MTJS.jpg'});
});

router.get('/javier', function(req, res, next) {
  res.render('equipo/PaginaLMVO/luis',{style:'styleLuis.css', img:'LMVO.jpg'});
});

router.get('/jose', function(req, res, next) {
  res.render('equipo/PaginaJMRR/jose',{style:'styleJose.css', img:'JMRR.jpg'});
});

router.get('/luis', function(req, res, next) {
  res.render('equipo/PaginaLMVO/luis',{style:'styleLuis.css', img:'LMVO.jpg'});
});
module.exports = router;
