var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Game = require('../modelos/datos');

/*Metodo Get*/
router.get('/', function(req, res, next) {
  Game.find({}, (err, datos)=>{
    if(err){
      res.json({'Error':'No existe'});
    }else{
      res.status(200).json(datos);
    }
  });
});
/*Metodo Get One*/
router.get('/:idGame', function(req, res, next) {
  Game.findOne({'id':req.params.idGame}, (err, datos)=>{
    if(err){
      res.json({'Error':'No existe'});
    }else{
      res.status(200).json(datos);
    }
  });
});

/*Metodo Post*/
router.post('/', (req, res, next)=>{
  var juego = Game({
    id: req.body.id,
    nombre: req.body.nombre,
    anio: req.body.anio,
    compania: req.body.compania,
    consola: req.body.consola
  });

  juego.save((err,data)=>{
    if(err){
      res.json({'error':"Error al insertar"});
    }else{
      res.status(200).json(data);
    }
  });
});
/*Metodo Delete */
router.delete('/:idJuego', function(req, res, next) {
  Game.deleteOne({'id':req.params.idJuego}, (err)=>{
    if(err){
      res.json({'Error':'No existe'});
    }else{
      res.json({'Estatus':'Borrado'});
    }
  });
});

// TODO:
/*Metodo Patch*/
router.patch('/:idMar', function(req, res, next) {
  const body = req.body;
  Game.updateOne({'id':req.params.idMar},
  body,
  (err)=>{
    if(err){
      res.json({'Error':'No existe'});
    }else{
      res.json({'Estatus':'Actualizado'});
    }
  });
});


router.put('/:idMar', (req, res, next)=>{
  var juego = Game({
    id: req.body.id,
    nombre: req.body.nombre,
    anio: req.body.anio,
    compania: req.body.compania,
    consola: req.body.consola
  });
  const body = req.body;
  //TEST
  if(req.body.id == null || req.body.nombre == null ||
  req.body.anio == null || req.body.compania == null ||
  req.body.consola == null){
    res.json({'error':"Faltan Campos"});
  }else{
    Game.updateOne({'id':req.params.idMar},
    body,
    (err)=>{
      if(err){
        res.json({'Error':'No existe'});
      }else{
        res.json({'Estatus':'Actualizado'});
      }});
    }
  }); // Se cierra Función PUT

module.exports = router;
