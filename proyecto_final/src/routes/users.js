var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/jerico', function(req, res, next) {
  res.render('equipo/PaginaDJHM/jerico');
});

router.get('/dana', function(req, res, next) {
  res.render('equipo/PaginaDIFH/DanaItzelFonsecaHernandez');
});

router.get('/fernando', function(req, res, next) {
  res.render('equipo/PaginaFMH/fernan');
});

router.get('/hassel', function(req, res, next) {
  res.render('equipo/PaginaHJP/hassel');
});

router.get('/javier', function(req, res, next) {
  res.render('equipo/PaginaACR/index');
});

router.get('/jose', function(req, res, next) {
  res.render('equipo/PaginaJMRR/index');
});

router.get('/luis', function(req, res, next) {
  res.render('equipo/PaginaLMVO/index');
});

router.get('/maria', function(req, res, next) {
  res.render('equipo/PaginaMTJS/index');
});

module.exports = router;
