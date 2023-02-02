const express = require('express');
const router = express.Router();
const  pool = require('../db.js')
const employeesRoutes = require('./employees')

/* GET home page. */
router.get('/', (req, res, next) =>{
  res.send("HOLA MUNDO");
});

router.get('/ping', async(req, res, next) =>{
  const  result = await pool.query("SELECT 1 + 1 AS result")
  res.json(result[0]);
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

router.use(employeesRoutes)

module.exports = router;
