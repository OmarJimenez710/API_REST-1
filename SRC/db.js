//creacion de la conexion a la base de datos

import { createPool } from "mysql2/promise"; //importamos mysql2
import { credenciales } from "./configure.js";

export const pool = createPool({
    database: credenciales.database,
    host: credenciales.host,
    user: credenciales.user,
    port: credenciales.port,
    password: credenciales.password
})

