import express from "express"; //importamos express
import routerEmpleados from "./Routers/empleados.routes.js"; //importamos las rutas 

const app = express();

app.use(express.json()); //para que podemos intercabiar informacion en formato JSON
app.use("/api/empleados", routerEmpleados); //para que podemos utilizar el router

//MANEJO DE UNA RUTA QUE NO EXISTE DENTRO DEL SERVIDOR, EJEMPLO SI PONEMOS 
//localhost:3000/asdlfjnsdkjnvkds
app.use((req, resp, next)=>{
    resp.status(400).json({
        message : "Endpoit not found"
    })
});

app.set("PORT", 3000);

export default app;