const  express = require('express');
const  router = express.Router();
const {getEmployees, createEmployees, putEmployees, deleteEmployees} = require('../controllers/employees.controller');


router.get('/employees', getEmployees)

router.post('/employees', createEmployees)

router.put('/employees/:id', putEmployees)

router.delete('/employees/:id', deleteEmployees)

module.exports = router;
  