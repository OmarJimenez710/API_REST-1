//archivo en donde vamos a generar las configuraciones necesarias, para que nuestro archivo funcione 

import { config } from "dotenv"; //importacion de config para trabajar con variables de entorno 

config();

const database = process.env.DATABASE;
const port = process.env.PORT;
const host = process.env.HOST;
const user = process.env.USER;
const password = process.env.PASSWORD;

export const credenciales = {
    database, port, host, user, password
}


