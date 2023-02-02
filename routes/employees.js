const  express = require('express');
const  router = express.Router();

router.get('/', (req, res, next) =>{
    res.send("HOLA MUNDO");
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

module.exports = router;
  