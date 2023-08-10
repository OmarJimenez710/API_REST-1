//EN EL CONTROLADOR, SE VAN A LLEVAR A CABO LAS VALIDACIONES Y OTRAS OPERACIONES 

//como la primer peticion necesita conexion a la base de datos, la generamso 

import { pool } from "../db.js"; //importamos la conexion a la base de datos 

const getEmpleados = async (req, resp)=>{
    try{
        const respuesta = await pool.query("SELECT * FROM empleado");

        resp.json(respuesta[0]);
    }catch(error){
        resp.status(500).send("Error, hubo un error");
    }
};


const getParticularEmpleado = async (req, resp) =>{
    try{
        const id = req.params.id; //obtenemos el id para obtener el registro

        console.log(id);
    
        const respuesta = await pool.query("SELECT * FROM empleado WHERE id = ?", id);
    
        resp.send(respuesta[0]);
    }catch(error){
        resp.send("Hubo un error");
    }
}



const postEmpleados = async (req, resp) => {
    try{
        console.log(req.body); //entrega la informacion que se manda 

        const {name, salary} = req.body;
        const [rows] = await pool.query("INSERT INTO empleado (name, salary) VALUES (?, ?)", [name, salary]);

        resp.send({
            id: rows.insertId, //devuelve el id con el que se inserto a la base de datos
            name,
            salary    
        });
    }catch(error){
        resp.status(500).send("Error inesperado");
    }
}

const patchEmpleados = async (req, resp) => {
    try{
        const { id } = req.params;
        const {name, salary } = req.body;

        const [result] = await pool.query("UPDATE empleado SET  name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?", [name, salary, id]);

        if(result.affectedRows == 0){
            resp.send("Error, no se encontraron registros");
        }
        else if(result.affectedRows > 0){
            const [cambio] = await pool.query("SELECT * FROM empleado WHERE id = ?", id);

            resp.send(cambio);
        }
    }catch(error){
        resp.status(500).send("Error inesperado");
    }
};

const deleteEmpleados = async (req, resp)=>{
    try{
        const id = req.params.id;

        const [result] = await pool.query("DELETE FROM empleado WHERE id = ?", id); 

        if(result.affectedRows == 0){
            resp.send("Sin eliminación, ningun registro encontrado");
        }
        else if(result.affectedRows > 0){
            resp.send("Registro Eliminado Correctamente");
        }
    }catch(erro){
        resp.status(500).send("Error inesperado");
    }
};

export const controllerEmpleado = {
    getEmpleados,
    getParticularEmpleado,
    postEmpleados,
    patchEmpleados,
    deleteEmpleados
};


