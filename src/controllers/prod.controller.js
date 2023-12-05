const { pool } = require('../database');


async function getProduction(req, res){
    let sql = `SELECT * FROM bupykhzewtizasgw3aaz.panaderia WHERE fecha BETWEEN ? AND ?;`
    const{date1, date2} = req.query; //Aquí recogemos las dos fechas que nos envía el servicio
    const params = [date1, date2]; // las dos fechas pasan a ser los params de esta petición
  
    try{
        const [result] = await pool.query(sql, params)
        res.send(result);
    }   catch(error) {
        res.send(error);
    }
};

//función para obtener todos los items de la base de datos

async function getAllProduction(req, res){
    let sql = 'SELECT * FROM bupykhzewtizasgw3aaz.panaderia;'
    try{
        const [result] = await pool.query(sql);
        res.json(result);
    }catch (error) {
        res.status(500).send({ error: 'Error al obtener la producción total' });
    }
}

async function addProduction(req, res){
    let sql = 'INSERT INTO bupykhzewtizasgw3aaz.panaderia (fecha, cantidad) VALUES (?, ?);'
    const{fecha, cantidad } = req.body;
    const fechaDate = fecha ? new Date(fecha) : null; //aquí pasamos la fecha a formato Date, si no llega nada entonces fecha sería null
    const params = [fechaDate, cantidad];

    try{
        console.log(params)
        const[result] = await pool.query(sql, params);
        res.json(result);
    }catch(error) {
        res.status(500).send({  error:'Error al añadir una producción'})
    }
}

module.exports = {getProduction, getAllProduction, addProduction}