var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) =>{
  res.send("Hola mundo");
});

router.get('/employees', (req, res, next) => {
  res.send("Obteniendo empleados");
});

router.post('/employees', function(req, res, next) {
  res.send("Creando empleados");
});

router.put('/employees', function(req, res, next) {
  res.send("Actualizando empleado");
});

router.delete('/employees', function(req, res, next) {
  res.send("Eliminando empleados");
});


router.get('/', function(req, res, next) {
  res.send("Hola mundo");
});

module.exports = router;
