const { pool } = require('../db.js');

const getEmployees = async (req, res, next) => {
    try {

        console.log(req.params.id)
        const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [req.params.id])
        console.log(rows)

        if (rows.length<=0){
            return res.status(404).json({
                message: 'Empleado no encontrado'
            })
        }

    res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message:"Algo ha ido mal"
        })
    }
}

const createEmployees =   async (req, res, next) => {
    try {

        console.log(req.params.id)
        const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [req.params.id])
        console.log(rows)

        if (rows.length<=0){
            return res.status(404).json({
                message: 'Empleado no encontrado'
            })
        }

    res.json(rows[0])
    } catch (error) {
        return res.status(500).json({
            message:"Algo ha ido mal"
        })
    }
}

const putEmployees = async function(req, res, next) {
    try {
        const {id} = req.params
        const {name, salary} = req.body
        const [rows] = await pool.query('UPDATE employee SET NAME = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?',[name,salary,id])
        if (rows.affectedRows<=0) {
            return res.status(404).json({
                message: 'Empleado no encontrado'
            })
        }
        const [result] = await pool.query('SELECT * FROM employee WHERE id = ?', [id])
    
        res.json(result[0])
    } catch (error) {
        return res.status(500).json({
            message:"Algo ha ido mal"
        })    
    }

}

const deleteEmployees = async function(req, res, next) {
    try {

        const [rows] = await pool.query('DELETE FROM employee WHERE id = ?', [req.params.id])
        console.log(rows)
    
        if (rows.affectedRows<=0) {
            return res.status(404).json({
                message: 'Empleado no encontrado'
            })
        }
    
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message:"Algo ha ido mal"
        })
    }
}

module.exports = {
    getEmployees,
    createEmployees,
    putEmployees,
    deleteEmployees
}