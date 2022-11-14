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

export const updateEntreno = async (req,res) =>{ 
    const {id} = req.params
    const {Kilos,Series,Repes,Pr,Dia,Mes,Any} = req.body
    const [result] = await pool.query('update entrenamientos set Kilos = IFNULL(?,Kilos), Series = IFNULL(?,Series), Repes = IFNULL(?,Repes), Pr = IFNULL(?,Pr) where id = ?',[Kilos,Series,Repes,Pr,id])
    console.log(result)
    const [historial] = await pool.query('insert into horario(Kilos,Repes,Series,Pr,Dia,Mes,Anyo,id_entrenamiento) values(?,?,?,?,?,?,?,?)',[Kilos,Repes,Series,Pr,Dia,Mes,Any,id])
    console.log('historial actualizado')
    const [rows] = await pool.query('select * from entrenamientos where id = ?',[id])
    res.json(rows[0])
}

export const getHistorial = async (req,res) =>{ 
    const {id} = req.params
    const [result] = await pool.query('Select entrenamientos.Nombre,horario.Kilos,horario.Repes,horario.Series,horario.Pr,horario.Dia,horario.Mes,horario.Anyo from horario,entrenamientos where entrenamientos.id = horario.id_entrenamiento and entrenamientos.id = ?',id)
    res.json(result)
}