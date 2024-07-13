var express = require('express');
var router = express.Router();
const db = require('../models');
const producto = require('../models/producto');
const pedido = require('../models/pedido');

const {Cliente, Pedido ,Producto, ProductoPedido} = db;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//Clientes
router.get('/clientes/json', function(req, res, next) {
  Cliente.findAll({
    attributes: { exclude: ["updatedAt"] },
  })
  .then(cliente => {
    res.json(cliente);
  })
  .catch(error => res.status(400).send(error))
});

router.get('/clientes', function(req, res, next) {
  Cliente.findAll({
    attributes: { exclude: ["updatedAt"] },
  })
  .then(cliente => {
    res.render('clientes', { title: 'Clientes', arrClientes: cliente });
  })
  .catch(error => res.status(400).send(error))
});

//Productos
router.get('/productos/json', function(req, res, next) {
  Producto.findAll({
    attributes: { exclude: ["updatedAt"] },
  })
  .then(producto => {
    res.json(producto);
  })
  .catch(error => res.status(400).send(error))
});

router.get('/productos', function(req, res, next) {
  Producto.findAll({
    attributes: { exclude: ["updatedAt"] },
  })
  .then(producto => {
    res.render('productos', { title: 'Productos', arrProductos: producto });
  })
  .catch(error => res.status(400).send(error))
});


//Pedido
router.get('/pedidos/json', function(req, res, next) {
  Pedido.findAll({
    attributes: { exclude: ["updatedAt"] },
  })
  .then(pedidos => {
    res.json(pedidos);
  })
  .catch(error => res.status(400).send(error));
});

router.get('/pedidos', function(req, res, next) {
  Pedido.findAll({
    attributes: { exclude: ["updatedAt"] },
  })
  .then(pedidos => {
    res.render('pedidos', { 
      title: 'Pedidos',
      arrPedidos: pedidos  // Pasa los datos a la vista
    });
  })
  .catch(error => res.status(400).send(error));
});



module.exports = router;
