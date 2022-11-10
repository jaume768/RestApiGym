import { pool } from '../db.js';

export const getEntrenos = async (req,res) =>{ 
    const [result] = await pool.query('select * from tipo')
    res.json(result);
}

export const getEntrenosPierna = async (req,res) =>{ 
    let select = "select entrenamientos.id,entrenamientos.Nombre,entrenamientos.Kilos,entrenamientos.Repes,entrenamientos.Series,entrenamientos.Pr from tipo,entrenamientos where entrenamientos.tipo = tipo.id and tipo.id = 1"
    const [result] = await pool.query(select)
    res.json(result)
}

export const getEntrenosPush = async (req,res) =>{ 
    let select = "select entrenamientos.id,entrenamientos.Nombre,entrenamientos.Kilos,entrenamientos.Repes,entrenamientos.Series,entrenamientos.Pr from tipo,entrenamientos where entrenamientos.tipo = tipo.id and tipo.id = 2"
    const [result] = await pool.query(select)
    res.json(result)
}

export const getEntrenosPull = async (req,res) =>{ 
    let select = "select entrenamientos.id,entrenamientos.Nombre,entrenamientos.Kilos,entrenamientos.Repes,entrenamientos.Series,entrenamientos.Pr from tipo,entrenamientos where entrenamientos.tipo = tipo.id and tipo.id = 3"
    const [result] = await pool.query(select)
    res.json(result)
}